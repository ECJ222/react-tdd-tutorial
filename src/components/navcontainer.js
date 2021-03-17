import React from 'react'
import styled from 'styled-components'

const NavContainer = () => {
  return (
    <Nav>
      <Logo>SPLASHZONE</Logo>
      <Wrapper>
        <SubmitButton>Submit a photo</SubmitButton>
        <Divider />
        <LoginButton>Login</LoginButton>
        <JoinButton>Join here</JoinButton>
      </Wrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4d5dfb;
  background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 0;
  padding: 0px 4% 0px;
`

const Logo = styled.h1`
  font-weight: Bold;
  font-size: clamp(1rem, 1.5vw, 4rem);
  color: #fff;
  font-family: cursive;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 1.4rem;
  height: 48px;
`

const SubmitButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
  min-height: 47px;
  max-height: 47px;
  padding: 0 11px;
  font-size: clamp(0.7rem, 1.2vw, 1.3rem);
  text-decoration: none;
  cursor: pointer;
`

const Divider = styled.div`
  width: 1px;
  background: #fff;
  height: 100%;
`

const LoginButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: clamp(0.7rem, 1.2vw, 1.3rem);
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`

const JoinButton = styled.button`
  color: #fff;
  background-color: #3cb46e;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
  min-height: 42px;
  max-height: 42px;
  padding: 0 11px;
  font-size: clamp(0.7rem, 1.2vw, 1.3rem);
  text-decoration: none;
  cursor: pointer;
`

export default NavContainer
