import styled from 'styled-components'

export const ItemsContainer = styled.div`
  max-height: 100%;
  width: 75%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  grid-gap: 16px;
`

export const Header = styled.span`
  color: #ffdd00;
  font-size: 36px;
  margin: 16px;
`
