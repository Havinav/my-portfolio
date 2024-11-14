import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex sticky top-0 h-full justify-between bg-orange-500  text-white text-lg'>
            <div className='p-5'>
                <Link to={'/'}>My Portfolio</Link>
            </div>
            <div className='flex items-center gap-5 p-5'>
                <div>
                    <Link to={'about'}>About</Link>
                </div>
                <div>
                   <Link to={'projects'}> Projects</Link>
                </div>
                <div>
                    <Link to={'education'}>Education</Link>
                </div>
            </div>
        </div>
    )
}

export default Header