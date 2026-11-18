import { useState } from 'react'
import { profile } from "../data"

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <header className = "nav"> 
            <div className ="container nav-inner">
                <a href="#top" className="logo">
                    <span className="logo-box">&gt;_</span>
                    {profile.shortName}
                </a>

                { /* phone version */}
                <button className = "menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? 'x' :  '☰'}
                </button>
                <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>

            </div>
        </header>
    )


}