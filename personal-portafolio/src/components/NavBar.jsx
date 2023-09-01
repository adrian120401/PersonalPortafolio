import { useState, useEffect } from "react";
import { Menu } from "./Menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  useEffect(() => {
    window.addEventListener('resize', updateMenuState)
    return () => {
      window.removeEventListener('resize', updateMenuState)
    }
  }, [])


  const updateMenuState = () => {
    if(window.innerWidth >= 992)
    setIsMenuOpen(false)
  };
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-end" >
        <button
        className={`navbar-toggler mx-3 border-0 d-lg-none`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-center d-none d-lg-block d-xl-none">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#home">
            Home
          </a>
          <a class="nav-item nav-link" href="#about">
            About me
          </a>
          <a class="nav-item nav-link" href="#projects">
            Projects
          </a>
          
          <a class="nav-item nav-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </nav>
  );
};

export { NavBar };
