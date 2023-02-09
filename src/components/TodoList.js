import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo } from '../actions'
import { LowContainer } from '../styles/styled-components'
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`
const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background: var(--gray_100);
`

const TodoList = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todoReducer.todoList)
  const Todo = () => {
    const handelIsDone = (e, el) => {
      dispatch(updateTodo('todoList', {
        ...el,
        isDone: e.target.checked
      }))
      console.log(e.target.checked)
    }
    return (
      <ListContainer className='app_wrap'>
        {todoList.map((el) => {
            console.log(el)
            let { isDone, title, docId } = el
            return <LowContainer key={docId} background='var(--gray_100)' color='black' margin='10px'>
              <input type='checkbox' defaultChecked={isDone} onClick={(e) => handelIsDone(e, el)}></input>
              <span>{title}</span>
            </LowContainer>
        })}
      </ListContainer>
    )
  }

  return (
    <div>
      <Todo></Todo>
    </div>
  )
}

export default TodoList