import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Liink = props => (
  <LiinkWrapper>
    <Link
      {...props}
      activeStyle={{
        color: props.to !== "/" ? "var(--accent)" : "var(--color)",
      }}
    >
      {props.children}
    </Link>
  </LiinkWrapper>
)

const LiinkWrapper = styled.span`
a {
  text-decoration: none;
  color: var(--color);
  font-weight: 600;
  &:hover {
    color: var(--accent);
    text-decoration: underline;
  }
}
`

export default Liink
