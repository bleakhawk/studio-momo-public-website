import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="section-content">
        <div className="hero-content fade-in-up">
          <div className="logo-container">
            <img src="/aatma-labs-light.svg" alt="Aatma Labs" className="logo-image" />
            <h1 className="logo">Studio Momo</h1>
          </div>
          <p className="description">
            Reimagines how dance, yoga, and fitness studios run their business — with simplicity and soul.
          </p>
          <a href="#signup" className="btn btn-primary">
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
