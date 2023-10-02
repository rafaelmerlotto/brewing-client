import * as React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const user = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNHG33ev9p51z2RMAdSpBNg1BH8dJba_Uk1AdZi-Ng&s',
    name: 'User test'
}

export default function SideBar() {
  return (
    <div className='sideBar'>
        <div className='profile'>
          <img src={user.img}/>
          <h4>{user.name}</h4>
        </div>
        <ul>
            <button>Profile</button>
            <button>Brewing list</button>
        </ul>
        <div className='logout'>
            <Logout/>
        </div>
    </div>
  )
}
