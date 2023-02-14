import {
  ImagesBox,
  ImagesContainer,
  PlayAgainBox,
  Team,
  Image,
  OptionsContainer,
  ImgBtn,
  ResultStatus,
  PlayAgainBtn,
} from './styledComponents'

const ResultBox = props => {
  const {changeGameStatus, playAgainStatus, dataList} = props
  const changeNewGameStatus = () => {
    changeGameStatus()
  }

  return (
    <OptionsContainer>
      <ImagesContainer>
        <ImagesBox>
          <ImgBtn>
            <Team>YOU</Team>
            <Image src={dataList[0].imageUrl} alt="your choice" />
          </ImgBtn>
          <ImgBtn>
            <Team>OPPONENT</Team>
            <Image src={dataList[1].imageUrl} alt="opponent choice" />
          </ImgBtn>
        </ImagesBox>
        <PlayAgainBox>
          <ResultStatus>{playAgainStatus}</ResultStatus>
          <PlayAgainBtn type="button" onClick={changeNewGameStatus}>
            PLAY AGAIN
          </PlayAgainBtn>
        </PlayAgainBox>
      </ImagesContainer>
    </OptionsContainer>
  )
}

export default ResultBox
