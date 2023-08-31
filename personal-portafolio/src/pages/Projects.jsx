import { ProjectList } from "../data/ProjectsList"
import { Link } from "react-router-dom"

const Projects = ()=> {

    const getAllProjects = () =>{
        console.log(ProjectList)
        return ProjectList.map(Project =>{
            return(
                    <div class="card m-2" style={{backgroundColor:"#323232", color:"white"}} >
                        <img src={Project.imgs[0]} alt={Project.imgs[0]} className="card-img-top"></img>
                        <div class="card-body">
                        <h5 class="card-title">{Project.title}</h5>
                        {Project.text}
                        <Link className="btn btn-light">View details</Link>
                        </div>
                    </div>
                
            )
        })
    }
    return(
        <div class="container-fluid p-4" style={{backgroundColor:"#323232",minHeight:"100vh"}}>
           <div class="card-group">
            {getAllProjects()}
            </div>   
        </div>
              
    )
}

export {Projects}