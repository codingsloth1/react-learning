import noProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProjectSelected({addSelectProject}){
    return(
    <div className='mt-24 text-center w-2/3'>
      <img src={noProjectImage} alt='An empty task list'  
      className='w-16 h-16 object-contain mx-auto'/>

      <h3>No project selected</h3> 
      <p>Select a project or get started with a new one</p> 
      
        <Button onClick={addSelectProject}>Create new project</Button>
      
    
    </div>
    )
}