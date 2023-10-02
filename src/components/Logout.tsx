import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Logout() {
  
    return (
        <div className='logout'>
            <Link 
            style={{ color: '#fff', fontSize: 20, textDecoration: 'none' }}
            type='logout' 
            className='link' 
            to='/login' 
            >Logout</Link>
        </div>
    )
}
