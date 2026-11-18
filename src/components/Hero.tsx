import { profile, stats } from "../data";

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* decoaration: fain grid + gradien (soft glow) */}
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="container hero-inner">


        {/* ----- left side ----- */}
        <div>
          <div className="pill">
            <span className="dot"></span> Available for opportunities
          </div>

          <h1>
            Building Reliable Software
            <span className="highlight"> that solves real-world problem</span>
          </h1>

          <p className="hero-text">
            I'm {profile.name}, a Computer Science student at SIM–UOL in
            Singapore.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View projects → 
            </a>
            <a href="resume.pdf" className="btn btn-outline" target="_blank">
              Download resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank">
              LinkedIn ↗
            </a>
          </div>
        </div>


        {/* ----- right side: fake code editor ----- */}
        <div className="code-window">
          <div className="code-top">
            <span className="light red"></span>
            <span className="light yellow"></span>
            <span className="light green"></span>
            <span className="code-path">/about/san</span>
          </div>

          <div className="code-body">
            <p>
              <span className="c-muted">const</span> developer = {"{"}
            </p>
            <p className="indent">
              <span className="c-key">fields:</span> [
              <span className="c-str">"Full-Stack"</span>,{" "}
              <span className="c-str">"Data-Science"</span>, {" "}
              <span className="c-str">"AI-ML"</span>
              ],

            </p>
            <p className="indent">
              <span className="c-key">studying:</span>{" "}
              <span className="c-str">"BSc CS @ SIM–UOL"</span>,
            </p>
            {/* <p className="indent">
              <span className="c-key">lookingFor:</span>{" "}
              <span className="c-str">"SWE roles"</span>
            </p> */}
            <p>{"}"}</p>
          </div>

          <div className="code-stats">
            {stats.map((stat) => (
              <div className="code-stat" key={stat.label}>
                <p className="code-stat-number">{stat.number}</p>
                <p className="code-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
