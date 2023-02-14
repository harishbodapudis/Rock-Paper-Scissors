import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 70%;
  margin: auto;
`

export const ImagesContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const ImagesBox = styled.li`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 120%;
`
export const PlayAgainBox = styled(ImagesBox)`
  flex-direction: column;
  justify-content: center;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`
export const ImgBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`
export const PlayAgainBtn = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border: 0px;
  border-radius: 5px;
  color: #223a5f;
  font-family: bree serif;
  text-align: center;
  padding: 10px 20px;
`
export const ResultStatus = styled.p`
  color: #ffffff;
  font-family: roboto;
  font-weight: bold;
`
export const Team = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`
