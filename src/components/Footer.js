import React from 'react'
import styled from 'styled-components'
import { ColumnContainer, Link } from '../styles/styled-components'

const Footer = () => {
  return (
    <ColumnContainer background='var(--skyblue)' position='absolute'>
      <p>Copyright 2023. Mmaryyy all rights reserved.</p>
      <Link href='https://github.com/Mmaryyy/project_todo_app' target='_blank'>@github</Link>
    </ColumnContainer>
  )
}

export default Footer