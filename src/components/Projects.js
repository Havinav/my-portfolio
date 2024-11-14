import React from 'react'

const projectsData = [
  {
    "id":1,
    "company" : "Cognizant",
    "projectName" : "Electronic Product Management &Tracking System(eProd)",
    "client" : "Cengage, USA",
    "technology" : "Java8,Springboot,Maven,Weblogic",
    "role" : "Developer",
    "description" : "eProd is a web based electronic product management and tracking system that supports multiple digital formats primarily the eBooks. It also supports other formats like Mind Tap, UPDF, Kindle etc. and in future it might support Assessments too. eProd stores metadata of eBook Production like dates, statuses, schedules, production meta data etc. eProd is accessible to internal as well as external users who provide the required details to produce eBooks."
  },
  {
    "id":2,
    "company" : "Cognizant",
    "projectName" : "Snapp",
    "client" : "AbbVie.inc. USA",
    "technology" : "Java8,Springboot,Maven,Weblogic",
    "role" : "Developer",
    "description" : "SNAPP used to purchase the order via AbbVie intranet. Snapp contains the following process of PO Request, POCN and Question module to ask the questions about that application. It’s had an automated workflow about the progression of each request once after Submit and it done by Epass Interface."
  }
]
const Projects = () => {
 
  const projectList = projectsData.map((project,index)=>{
    return(
      <div key={index} className='gap-2  bg-white mt-5 p-5 rounded-2xl ml-20 mr-20 space-y-4'> 
        <b className='mr-10'>Company</b> : {project.company} <br/>
        <b className='mr-2.5'>Project Name</b> : {project.projectName} <br/>
        <b className=''>Client</b> : {project.client} <br/>
        <b>Technology</b> : {project.technology} <br/>
        <b>Role</b> : {project.role} <br/>
        <b>Description</b> : {project.description} <br/>
        <br/>
      </div>
    )
  })
  return (
    <div className='flex'>
      <div className=''>
       {projectList}  
      </div>
    </div>
  )
}

export default Projects