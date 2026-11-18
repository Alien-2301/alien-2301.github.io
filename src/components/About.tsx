import { SectionHeader } from "./SectionHeader";


export function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-inner">
        <div>
          <SectionHeader
            eyebrow="A little context"
            title="From power plants to pull requests."
          />
        </div>
      </div>
    </section>
  );
}
