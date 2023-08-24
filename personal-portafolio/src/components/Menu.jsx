import { Link } from "react-router-dom"
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
        <Link class="nav-item nav-link text-light" to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link class="nav-item nav-link text-light" to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link class="nav-item nav-link text-light" to="/about" onClick={toggleMenu}>
            About me
          </Link>
        </ul>
    </div>
    )
}
export {Menu}