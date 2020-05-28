import React from "react"
import styled from "styled-components"

const Nav = props => <NavWrapper props={props}>{props.children}</NavWrapper>

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};
`

export default Nav
