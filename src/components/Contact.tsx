import { useState } from 'react'
import { profile } from "../data.js";
import { SectionHeader } from "./SectionHeader.jsx";


export function Contact() {

    const [copied, setCopied] = useState(false);
    async function copyEmail() {
        try{
            await navigator.clipboard.writeText(profile.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            alert(profile.email)
        }
    }
    return (
        <section id="contact" className="section">
        <div className="container">
            <SectionHeader
            eyebrow="Contact"
            title="Have a role or project in mind?"
            text="I'm open to software engineering internships and graduate roles. I'd be glad to talk."
            />

            <div className="contact-grid">

                <a href={"mailto:" + profile.email} className="contact-card">
                    <span className="contact-icon">@</span>
                    <h3>Send an email</h3>
                    <p>{profile.email}</p>
                    <span className="contact-arrow">↗</span>
                </a>

                <button type="button" onClick={copyEmail} className="contact-card">
                    <span className="contact-icon">⧉</span>
                    <h3>{copied ? "Copied!" : "Copy my email"}</h3>
                    <p>
                        {copied ? "Paste it wherever you like." : "No mail app needed."}
                    </p>
                    <span className="contact-arrow">{copied ? "✓" : "⧉"}</span>
                </button>

                <a href={profile.linkedin} target="_blank" className="contact-card">
                    <span className="contact-icon">in</span>
                    <h3>Connect on LinkedIn</h3>
                    <p>Let's compare notes.</p>
                    <span className="contact-arrow">↗</span>
                </a>

            </div>
        </div>
        </section>
    );
}
