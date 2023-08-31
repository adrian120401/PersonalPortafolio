import ReactTyped from "react-typed"
import { Link } from "react-router-dom"


const Header = () =>{
    return(
        <div className="header-wraper row">
            <div className="d-flex flex-column justify-content-center align-items-center text-center text-light text-uppercase">
                <h1>Adrian de los Reyes</h1>
                <h3 className="mt-1">Full-Stack Developer</h3>
                <ReactTyped 
                strings={["Web development","Scripting", "E-commerce"]}
                className="typed-text"
                typeSpeed={50}
                backSpeed={40}
                loop
                />
                <Link className="btn btn-outline-light mt-3" to={""}>Contact me</Link>
            </div>
        </div>
    )
}

export {Header}