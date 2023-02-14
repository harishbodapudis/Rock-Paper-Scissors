import {
  Score,
  ScoreItems,
  ScoreContainer,
  EachItem,
  ScoreValue,
  ScoreText,
  ScoreBoardHeading,
} from './styledComponents'

const ScoreBoard = props => {
  const {dataList, score} = props
  const dataLists = ['Rock', 'Paper', 'Scissors']
  const dataItems = item => (
    <EachItem key={item}>
      <ScoreBoardHeading>{item}</ScoreBoardHeading>
    </EachItem>
  )

  return (
    <ScoreContainer>
      <ScoreItems>{dataList.map(item => dataItems(item.id))}</ScoreItems>
      <Score>
        <div>
          <ScoreText>Score</ScoreText>
          <ScoreValue>{score}</ScoreValue>
        </div>
      </Score>
    </ScoreContainer>
  )
}

export default ScoreBoard
