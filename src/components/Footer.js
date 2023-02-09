import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright 2023. Mmarry all rights reserved.</p>
      <a href='https://github.com/Mmaryyy/project_todo_app' target='_blank'>@github</a>
    </FooterContainer>
  )
}

export default Footer