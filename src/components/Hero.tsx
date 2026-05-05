import './Hero.css';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Scaling <span className="gradient-text">Messaging</span> & CPaaS Excellence
          </h1>
          <p className="hero-subtitle">
            Helping businesses navigate the complex landscape of A2P SMS, Multichannel Messaging, and Strategic Sales Growth.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Book a Consultation</a>
            <a href="#services" className="btn btn-outline">What I Do</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={heroImg} alt="Anton Morozov" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
