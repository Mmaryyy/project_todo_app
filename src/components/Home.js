import logo from '../images/logo.png'
import styled, { keyframes } from 'styled-components'

const gradient = keyframes`
  0% {
    color: #075082
  }
  100% {
    color: #E6E6E6
  }
`
const RotateLogo = styled.img`
  animation: ${gradient} 2s linear infinite;
`
const Home = () => {
  
  return (
    <div className='logo_container'>
      <RotateLogo src={logo} alt='로딩이미지'/>
    </div>
  )
}

export default Home