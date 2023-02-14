import {
  ImagesBox,
  ImagesContainer,
  ImageBox,
  Image,
  OptionsContainer,
  ImgBtn,
} from './styledComponents'

const GameOptions = props => {
  const {dataList, optionSelectedByYou} = props
  const yourSelectedOption = value => {
    optionSelectedByYou(value)
  }

  return (
    <OptionsContainer>
      <ImagesContainer>
        <ImagesBox>
          <ImgBtn
            type="button"
            onClick={() => yourSelectedOption(dataList[0])}
            data-testid="rockButton"
          >
            <Image src={dataList[0].imageUrl} alt={dataList[0].id} />
          </ImgBtn>
          <ImgBtn
            type="button"
            onClick={() => yourSelectedOption(dataList[1])}
            data-testid="scissorsButton"
          >
            <Image src={dataList[1].imageUrl} alt={dataList[1].id} />
          </ImgBtn>
        </ImagesBox>
        <ImageBox>
          <ImgBtn
            type="button"
            onClick={() => yourSelectedOption(dataList[2])}
            data-testid="paperButton"
          >
            <Image src={dataList[2].imageUrl} alt={dataList[2].id} />
          </ImgBtn>
        </ImageBox>
      </ImagesContainer>
    </OptionsContainer>
  )
}

export default GameOptions
