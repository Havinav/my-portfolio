import React from 'react'
import gopal from '../assets/gopal.jpg'

const MySelf = () => {
    return (
    <div className='flex p-3'>
       <div className='w-full text-center'>
          <img src={gopal} alt='Gopal' className=' mx-auto rounded-full w-96 h-96'/><br/>
          <b>Gopal Pandilla</b><br/>
          <b>Software Engineer</b>
       </div>
       <div className='flex'>
        <h4>My Self</h4>
       </div>
    </div>
    )
}

export default MySelf