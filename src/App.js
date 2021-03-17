import React from 'react'
import Globalstyle from './components/globalstyles'
import Layout from './components/layout'
import NavContainer from './components/navcontainer'
import Grids from './components/gridcontainer'

function App () {
  return (
    <>
      <Globalstyle />
      <Layout>
        <NavContainer />
        <Grids text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, Vestibulum tortor quam, feugiat vitae, ultricies eget." />
      </Layout>
    </>
  )
}

export default App
