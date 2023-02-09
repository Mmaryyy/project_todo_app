import React from 'react'
import styled from 'styled-components'

const CalendarContainer = styled.div`
    width: 100%;
    height: calc(100vh - 300px);
    background: var(--gray_100);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`

const Weekdays = styled.button`
    background: none;
    color: var(--color-content);
`

const CustomCalendar = () => {
    const date = new Date()
    const year = date.getFullYear()
    // month는 0 ~ 11 의 값으로 반환하기 때문에 
    const month = date.getMonth() + 1
    const day = date.getDate()

    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
  return (
    <CalendarContainer>
    </CalendarContainer>
  )
}

export default CustomCalendar