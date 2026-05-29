import FadeIn from './FadeIn'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">About</div>
      <FadeIn>
        <div className="section-content">
          <p>
            Hello! I'm <strong>Enzo Garnier</strong>, a developer based in{' '}
            <strong>Rennes, France</strong>. I create video games, user interfaces,
            and web experiences—things that are meaningful and visually appealing.
          </p>
          <p>
            After studying at <strong>Epitech</strong>, spending time in South Korea at <strong>Keimyung University</strong>,
            and working at the agency <strong>R2 Digital</strong>, I've learned to work quickly, adapt, and
            deliver. Among my projects are the redesign of the Brets and Cielis websites,
            as well as game development with <strong>OMGG</strong>.
          </p>
          <p>
            At the same time, my role as an assistant and later as a junior educational accompanist
            in Epitech allowed me to develop my skills in team management,
            writing and conducting educational activities, as well as giving talks on
            various technologies and practices.
          </p>
          <p>
            I've also mentored students as a teaching assistant at Epitech—running workshops and sharing
            what I know is something I truly enjoy doing.
          </p>
          <p>
            <strong>When I'm not working,</strong> I play games, work on personal projects, or watch indie devlogs that inspire me.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
