import styled from "styled-components"

export const ColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.background || 'none'};
  padding: 15px;
  color: ${props => props.color || 'var(--gray_200)'};
  position: ${props => props.position || 'relative'};
`
export const LowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${props => props.background || 'none'};
  padding: 15px;
  color: ${props => props.color || 'var(--gray_200)'};
  margin-bottom: ${props => props.margin || 0};
`

export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.color || 'white'};
`

export const ImgContainer = styled.img`
    width: 35px;
    margin: 10px;
`