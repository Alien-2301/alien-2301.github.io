import { experience } from '../data.js';
import { SectionHeader } from './SectionHeader.js';

export function Experience() {
    return(
        <section id="experience" className = "section section-alt">
            <div className = "container">
                <SectionHeader eyebrow= 'The path so far' title = "Education and Experience"/>

                <div className='timeline'>

                    {experience.map((exp) => (
                        <div className = "timeline-exp" key={exp.org + exp.period}>
                            <div className = "timeline-date">{ exp.period }</div>
                            <div className='timeline-content'>
                                <span className='timeline-dot'/>
                                <p className='eyebrow'>{ exp.org }</p>
                                <h3>{ exp.role }</h3>
                                <p className = "timeline-text">{ exp.text }</p>
                                <div className = "badges">
                                    {exp.tags.map((tag) => (
                                        <span className='badge' key={ tag }>{ tag }</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>        

            </div>
        </section>
    )
}

