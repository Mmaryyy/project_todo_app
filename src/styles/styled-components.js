import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.background || 'none'};
  padding: 15px;
  color: ${props => props.color || 'var(--gray_200)'};
`
export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.color || 'white'};
`

export const ImgContainer = styled.img`
    width: 35px;
    margin: 10px;
`