import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";

import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectState , setProjectState]=useState({
    selectProject:undefined,
    projects:[]
  })

  function handleSelectProject(id){
   setProjectState((prevState)=>{
      return{
        ...prevState,
      selectProject:id
      } 
  }) 
  }

  function handleStartProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
      selectProject:null
      } 
  })
  }
  function handleDeleteProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectProject:undefined,
        projects:prevState.projects.filter((project)=> project.id!== prevState.selectProject)
      }
    })
  }
  function handleAddProject(projectData){
    setProjectState((prevState)=>{
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id:projectId

      }
      return{
        ...prevState,
        selectedProject:undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }
  console.log(projectState)
  const selectedProject = projectState.projects.find(project=> project.id === projectState.selectProject)
  let content= <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>

  if(projectState.selectProject === null){
    content=<NewProject onAdd={handleAddProject}/>
    
  }else if(projectState.selectProject === undefined){
    content= <NoProjectSelected addSelectProject={handleStartProject}/>
  }
  

  return (
    <main className="h-screen flex gap-8 bg-stone-400">
    
     <ProjectSidebar  addSelectProject={handleStartProject} projects={projectState.projects}     onSelectProject={handleSelectProject}/>
      {/* <NewProject/>  */}
    {content}
    </main>
  );
}

export default App;
