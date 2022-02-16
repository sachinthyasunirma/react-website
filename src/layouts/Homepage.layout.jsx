import React from 'react'

function HomepageLayout({props, children}) {
  return (
    <div>
        <h1>NavBar</h1>
        {children}
        <h1>Footer</h1>
    </div>
  )
}

export default HomepageLayout;