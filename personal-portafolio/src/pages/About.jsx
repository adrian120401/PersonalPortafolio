import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJava, faJs, faReact, faPython} from "@fortawesome/free-brands-svg-icons"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import Me from "../assets/me.jpeg"
import cv from "../assets/cv.pdf"
const About = ()=> {
    return(
        <div id="about" className="mx-auto mt-5 text-light">
            <h2 className='text-center '>About me</h2>
            <div className='about-container d-grid mt-4'>
                <img src={Me} className='img-me' alt='Me'></img>
                <div className='about-info mt-0 mx-2'>
                    <h5>Hi! My name is Adrian, i'm a Full-Stack developer with passion for learning and making an impact.
                    Equipped with a diverse skill set and experience across the technology
                    stack. Excited to contribute and drive positive change.</h5>
                    <h4> Tech stack:</h4>
                    <div className='d-flex icons'>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Java</Tooltip>}
                        >
                            <FontAwesomeIcon className='fa-4x icon' icon={faJava}/>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>JavaScript</Tooltip>}
                        >
                            <FontAwesomeIcon className='fa-4x icon' icon={faJs}/>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>React</Tooltip>}
                        >
                            <FontAwesomeIcon className='fa-4x icon' icon={faReact}/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Python</Tooltip>}
                        >
                            <FontAwesomeIcon className='fa-4x icon' icon={faPython}/>
                        </OverlayTrigger>                  
                    </div>
                    <a class="btn btn-outline-primary mt-4 mb-0" href={cv} role="button" target="_blank" rel="noreferrer">
                        Curriculum Vitae <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                </div>    
            </div>
        </div>
    )
}

export {About}