import React from 'react'
import Navbar from '../components/Navbar';

function HomepageLayout({props, children}) {
  return (
    <div>
        <Navbar />
        {children}
        <h1>Footer</h1>
    </div>
  )
}

export default HomepageLayout;