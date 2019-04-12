import styled from 'styled-components'

export const GamesContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`

// prettier-ignore
export const GamesHeaderContainer = styled.div`
  width: 75%;
  background: #02519F;
  height: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  margin: 16px;
  padding: 16px;
`

export const StyledInput = styled.input`
  width: 10%;
  background-color: transparent;
  height: fit-content;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  transition: all 0.5s;
  &:focus {
    border-bottom: 1px solid #ffdd00;
  }
  outline: none;
  font-size: 2em;
  justify-self: flex-end;
  text-align: center;
`

export const Header = styled.span`
  color: #ffdd00;
  font-size: 2em;
  font-weight: 600;
  justify-self: flex-start;
  margin-bottom: auto;
`
