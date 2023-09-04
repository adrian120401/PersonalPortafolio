import { ProjectList } from "../data/ProjectsList"
import { Link } from "react-router-dom"
import { Carousel, Row, Col} from "react-bootstrap"
const Projects = ()=> {
    const projectGroups = [];
    for (let i = 0; i < ProjectList.length; i += 2) {
        projectGroups.push(ProjectList.slice(i, i + 2));
      }

    const getProject = (Project) =>{
            return(
                    <div class="card m-2 text-light" style={{backgroundColor:"#323232"}} >
                        <img src={Project.imgs[0]} alt={Project.imgs[0]} className="card-img-top"></img>
                        <div class="card-body">
                        <h5 class="card-title">{Project.title}</h5>
                        {Project.text}
                        <Link className="btn btn-light">View details</Link>
                        </div>
                    </div>
                
    )}
    return(
        <div class="container text-light mt-4" id="projects">
            <h2 className="text-center">Projects</h2>
            <Carousel style={{ height: 500 }}>
          {projectGroups.map((group, index) => (
            <Carousel.Item style={{ height: 500 }} key={index}  interval={3000}>
                <Row>
                {group.map((project) => (
                <Col key={project.id}>
                  {getProject(project)}
                </Col>
              ))}
                </Row>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
              
    )
}

export {Projects}