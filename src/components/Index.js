import React from 'react'
import Calendar from '../components/source/Calendar'
import styled from 'styled-components'
import CustomCalendar from './source/CustomCalendar'
const TodoContainer = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 20px;
  background: var(--gray_100);
  padding: 15px;
  margin-top: 10px;
`


const Index = () => {
  return (
    <div>
      <Calendar 
      // 일주일: 일요일부터 시작
      calendarType="Hebrew"
      // day 숫자만 표기
      formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
      />
    </div>
  )
}

export default Index