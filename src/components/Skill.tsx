import { skills } from "../data"
import { SectionHeader } from "./SectionHeader"

export function Skills () {
    return (
<section id="skills" className="section">

      <div className="container">
        <SectionHeader
          eyebrow="The toolkit"
          title="Tools I used in my Projects."
          text="A practical stack shaped by the projects above."
        />

        {/* Skill session */}
        <div className="three-col-grid">
          {skills.map((skill) => (
            <div className="box" key={ skill.title }>

                <h3 className="skill-title" style = {{fontSize: "18px", fontWeight: "600"}}>{ skill.title }</h3>

                <div className="badges">
                    {skill.items.map((item) => (
                    <span className="badge" key={item}>{item}</span>
                    ))}
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
    )
}