import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import aboutData from '../../data/aboutData'
import aboutBanner from '../../assets/image-apropos.png'
import './about.css'

function About() {
  return (
    <main className="about">
      <div className="about__container">
        <Banner image={aboutBanner} isTextVisible={false} />

        <section className="about__collapses">
          {aboutData.map((item) => (
            <Collapse
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default About