import React, { PropsWithChildren } from 'react'
import Navbar from '../components/Navbar'

function layout( {children}: PropsWithChildren ) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default layout
