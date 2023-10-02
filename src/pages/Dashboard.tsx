import * as React from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Calculator from '../components/Calculator'
import List from '../components/List'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Nav />
      <div className='container'>
        <SideBar />
        <Calculator />
        <List/>
      </div>

    </div>
  )
}
