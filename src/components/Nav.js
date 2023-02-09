import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { LowContainer, ImgContainer } from '../styles/styled-components'
import calendar from '../images/calendar.png'
import createTodo from '../images/createTodo.png'
import diary from '../images/diary.png'
import habit from '../images/habit.png'
import todoList from '../images/todo.png'

const IconContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Nav = () => {
  const navigate = useNavigate()

  return (
    <LowContainer>
      <IconContainer onClick={() => navigate('/')}>
        <ImgContainer src={calendar} alt='monthly' />
      </IconContainer>
      <IconContainer onClick={() => navigate('/todolist')}>      
        <ImgContainer src={todoList} alt='todo_list' />
      </IconContainer>
      <IconContainer onClick={() => navigate('/todolist')}>            
        <ImgContainer src={habit} alt='habit'/>
      </IconContainer>
      <IconContainer onClick={() => navigate('/search')}>      
        <ImgContainer src={diary} alt='diary_of_moment'/>
      </IconContainer>
    </LowContainer>
  )
}

export default Nav