import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
