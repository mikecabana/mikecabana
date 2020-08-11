import React from "react"
import styled from "styled-components"

const LabelMaker = props => (
  <LabelMakerWrapper props={props}>{props.children}</LabelMakerWrapper>
)

const LabelMakerWrapper = styled.span`
  color: ${props => props.props.secret ? 'var(--accent)' : 'var(--bg-color)'};
  background-color:${props => props.props.secret ? 'var(--bg-color)' : 'var(--accent)'};
  padding: 0px 4px;
  font-weight: 600;
  transition: opacity 250ms ease-in-out;
  opacity: ${props => {
    if (props.props.secret) return "0"
  }};
  &:hover {
    opacity: ${props => {
      if (props.props.secret) return "1"
    }};
  }
`

export default LabelMaker
