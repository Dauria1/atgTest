import styled from 'styled-components'

export const NameDateContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

export const Name = styled.span`
  align-self: flex-start;
  margin-right: auto;
`
export const Date = styled.span`
  align-self: flex-end;
  margin-left: auto;
`

export const RaceDiv = styled.div`
  margin: 8px;
  cursor: pointer;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`
