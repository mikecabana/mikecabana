import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 8px 12px;
  cursor: pointer;
  text-transform: uppercase;

  background: ${props => props.props.background || "var(--accent)"};
  color: ${props => props.props.color || "var(--bg-color)"};
  font-size: ${props => props.props.fontSize || "12px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.5);
  }
`

export default Button
