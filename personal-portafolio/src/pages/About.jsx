import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJava, faJs, faReact, faPython} from "@fortawesome/free-brands-svg-icons"

const About = ()=> {
    return(
        <div id="about" className="d-flex flex-column justify-content-center align-items-center text-center mx-auto mt-5 text-light">
            <h5>Hi! My name is Adrian, i'm a Full-Stack developer with passion for learning and making an impact.
            Equipped with a diverse skill set and experience across the technology
            stack. Excited to contribute and drive positive change.</h5>

            <div className=''>
                <h4> Tech stack: </h4>
                <FontAwesomeIcon className='fa-4x' icon={faJava}/>
                <FontAwesomeIcon className='fa-4x' icon={faJs}/>
                <FontAwesomeIcon className='fa-4x' icon={faReact}/>
                <FontAwesomeIcon className='fa-4x' icon={faPython}/>
            </div>
        </div>
    )
}

export {About}