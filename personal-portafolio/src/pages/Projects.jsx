import { ProjectList } from "../data/ProjectsList"

const Projects = ()=> {

    const getAllProjects = () =>{
        console.log(ProjectList)
        return ProjectList.map(Project =>{
            return(
                <li className="list-group-item">
                    <img src={Project.imgs[0]} alt={Project.imgs[0]} className="card-img-top"></img>
                    <p>{Project.text}</p>
                </li>
            )
        })
    }
    return(
        <div>
            <h1>Projects</h1>
            <ul className="list-group">
                {getAllProjects()}
            </ul>
            
        </div>
    )
}

export {Projects}