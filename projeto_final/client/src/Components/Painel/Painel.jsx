import React from 'react'
import Sidebar from '../Painel/Sidebar Section/Sidebar'
import Body from '../Painel/Body Section/Body'


const Painel = () => {
  return (
    <div className='painel flex'>
      <div className="painelContainer flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  )
}

export default Painel