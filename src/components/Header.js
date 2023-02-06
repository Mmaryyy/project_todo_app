import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import dropdown from '../images/dropdown.png'
import search from '../images/search.png'
import alert from '../images/alert.png'
import '../styles/Global.css'

const Container = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ImgContainer = styled.img`
  width: 35px;
  margin: 10px;
`
const TitleContainer = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
`
const Title = styled.span`
  font-weight: 900;
  color: var(--content-main);
  font-size: var(--title);
`
const Header = () => {
  let data = new Date()
  const year = data.getFullYear()
  const month = data.getMonth()
  return (
    <Container>
      <ImgContainer src={logo} alt='user_avatar' />
      <TitleContainer>
        <Title>{year}년 {month}월</Title>
        <ImgContainer src={dropdown} alt='dropdown_calender' />
      </TitleContainer>
      <ImgContainer src={search} alt='search' />
      <ImgContainer src={alert} alt='alert' />
    </Container>
  )
}

export default Header