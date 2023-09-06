import { useState } from "react"
import { ProjectList } from "../data/ProjectsList"
import { Link } from "react-router-dom"
import { Carousel, Row, Col} from "react-bootstrap"
import { ProjectDetail } from "../components/ProjectDetail"

const Projects = ()=> {
    const [project, setProject] = useState(null)
    const [showDetail, setShowDetail] = useState(false)


    const projectGroups = [];
    for (let i = 0; i < ProjectList.length; i += 2) {
        projectGroups.push(ProjectList.slice(i, i + 2));
      }

    const handleOpenDetail = (currentProject) =>{
      setProject(currentProject)
      setShowDetail(true)
    }


    const getProject = (Project) =>{
            return(
                    <div class="card m-2 text-light" style={{backgroundColor:"#323232"}} >
                        <img src={Project.imgs[0]} alt={Project.imgs[0]} className="card-img-top"></img>
                        <div class="card-body">
                        <h5 class="card-title">{Project.title}</h5>
                        {Project.previewText}
                        <Link className="btn btn-light" onClick={() => handleOpenDetail(Project)}>View details</Link>
                        </div>
                    </div>
                
    )}
    return(
      <>
        <div class="container text-light mt-4" id="projects">
            <h2 className="text-center">Projects</h2>
            <Carousel style={{ height: 500, maxHeight: 500}} controls={false}>
          {projectGroups.map((group, index) => (
            <Carousel.Item style={{ height: 500, maxHeight: 500}} key={index} interval={90999999}/* interval={showDetail ? 99999999 : 3000} */ >
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
        <ProjectDetail project={project} showDetail={showDetail} setShowDetail={setShowDetail}></ProjectDetail>
      </>        
    )
}

export {Projects}