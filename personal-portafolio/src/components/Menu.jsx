const Menu =  ({isOpen, toggleMenu}) => {
    return(
        <div
      className="menu"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        backgroundColor: "#212529",
        transition: "top 0.3s ease",
        display: isOpen ? "flex" : "none",
        justifyContent: "center",
        textAlign:"center",
        zIndex: 2,
      }}
    >
        <ul style={{listStyle: "none" , padding: "0"}}>
        <a class="nav-item nav-link text-light" href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a class="nav-item nav-link text-light" href="#about" onClick={toggleMenu}>
            About me
          </a>
          <a class="nav-item nav-link text-light" href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a class="nav-item nav-link text-light" href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </ul>
    </div>
    )
}
export {Menu}