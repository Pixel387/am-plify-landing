import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          am<span>.plify</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Track Record</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact" className="btn btn-primary btn-sm">Let's Talk</a></li>
        </ul>
      </div>
    </nav>
  );
}
