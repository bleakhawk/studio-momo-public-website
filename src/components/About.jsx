import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="section-content">
        <h2>About Studio Momo</h2>
        <div className="about-content">
          <p>
            Built by the team behind <strong>Aatma Dance Studio</strong>, Studio Momo was born from 
            real experience running a vibrant studio community.
          </p>
          <p>
            We built the software we wished we had when managing our own studio — something that 
            brings simplicity, beauty, and focus to every interaction.
          </p>
          <p className="emphasis">
            "We built the software we wished we had when running our own studio."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
