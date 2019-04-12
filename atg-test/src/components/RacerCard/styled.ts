import styled from 'styled-components'

export const Number = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 20px;
  font-weight: 600;
  color: #ffdd00;
  transform: translateX(-50%);
`
export const HorseName = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const DriverFirst = styled.span`
  position: absolute;
  top: 0;
  left: 0;
`
export const DriverLast = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
`

export const ExtraInfoContainer = styled.div`
  background: #777777;
  position: relative;
  height: 50px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`

export const PaddingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const TrainerContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #02519e;
  border-radius: 8px;
  border: 2px solid #ffdd00;
  color: #ffdd00;
  padding: 8px;
  display: flex;
  width: 80%;
`
