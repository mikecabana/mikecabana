import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./theme-toggle"
import styled from "styled-components"

const Nav = props => {
  return (
    <NavLayout>
      <LeftNavItems>
        <Link to={'/'}>
          <img src="/logo.svg" style={{ width: "75px" }} />
        </Link>
      </LeftNavItems>

      <RightNavItems>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/blog"}>Blog</Link>
        <ThemeToggle />
      </RightNavItems>
    </NavLayout>
  )
}

const NavLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`

const RightNavItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const LeftNavItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export default Nav
