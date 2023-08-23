import "./style.css"
import { Link } from "react-router-dom"
const Menu =  ({isOpen, setIsOpen}) => {
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
        justifyContent: "end",
        textAlign:"right",
        zIndex: 2,
      }}
    >
        <ul >
        <Link class="nav-item nav-link text-light" href="#">
            Home
          </Link>
          <Link class="nav-item nav-link text-light" href="#">
            Projects
          </Link>
          <Link class="nav-item nav-link text-light" href="#">
            About me
          </Link>
        </ul>
    </div>
    )
}
export {Menu}