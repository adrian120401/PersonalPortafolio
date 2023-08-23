import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "./Menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" href="/">
        Navbar
      </Link>
      <button
        className={`navbar-toggler mx-3 border-0 d-lg-none`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link" href="#">
            Home
          </Link>
          <Link class="nav-item nav-link" href="#">
            Projects
          </Link>
          <Link class="nav-item nav-link" href="#">
            About me
          </Link>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} isMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export { NavBar };
