import React from 'react'
import styled from 'styled-components'
import { Container, Link } from '../styles/styled-components'

const Footer = () => {
  return (
    <Container background='var(--skyblue)'>
      <p>Copyright 2023. Mmaryyy all rights reserved.</p>
      <Link href='https://github.com/Mmaryyy/project_todo_app' target='_blank'>@github</Link>
    </Container>
  )
}

export default Footer