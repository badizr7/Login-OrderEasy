import React from 'react'
import Sidebar from '../Dashboard/src/Componentes/SideBar Section/Sidebar'
import Body from '../Dashboard/src/Componentes/Body Section/Body'


const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar/>
        <Body/>


      </div>
    </div>
  )
}

export default Dashboard