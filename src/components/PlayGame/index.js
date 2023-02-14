import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  Rules,
  RulesContainer,
  RulesImage,
  RulesImageContainer,
  RulesImageBox,
  RulesImageBoxCloseButton,
  PopupCloseButton,
  RulesText,
  MainHeading,
} from './styledComponents'
import ScoreBoard from '../ScoreBoard'
import GameOptions from '../GameOptions'
import ResultBox from '../ResultBox'

class PlayGame extends Component {
  constructor(props) {
    super(props)
    const {choicesList} = props
    this.state = {
      newGame: false,
      gameList: choicesList,
      score: 0,
      selectedOptions: '',
      playAgainStatus: '',
    }
  }

  changeGameStatus = () => {
    this.setState({newGame: false})
  }

  optionSelectedByYou = value => {
    const {gameList} = this.state
    const opponentsOption = Math.floor(Math.random() * 3)
    const opponent = gameList[opponentsOption]
    console.log('YOU', value)
    console.log('OPP', opponent)

    if (value.id === opponent.id) {
      console.log('Draw')
      this.setState({
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'IT IS DRAW',
      })
    } else if (value.id === 'SCISSORS' && opponent.id === 'PAPER') {
      console.log('YOU WON')
      this.setState(prevState => ({
        score: prevState.score + 1,
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'YOU WON',
      }))
    } else if (value.id === 'ROCK' && opponent.id === 'SCISSORS') {
      console.log('YOU WON')
      this.setState(prevState => ({
        score: prevState.score + 1,
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'YOU WON',
      }))
    } else if (value.id === 'PAPER' && opponent.id === 'ROCK') {
      console.log('YOU WON')
      this.setState(prevState => ({
        score: prevState.score + 1,
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'YOU WON',
      }))
    } else if (value.id === 'SCISSORS' && opponent.id === 'ROCK') {
      console.log('YOU LOSE')
      this.setState(prevState => ({
        score: prevState.score - 1,
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'YOU LOSE',
      }))
    } else if (value.id === 'ROCK' && opponent.id === 'PAPER') {
      console.log('YOU LOSE')
      this.setState(prevState => ({
        score: prevState.score - 1,
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'YOU LOSE',
      }))
    } else if (value.id === 'PAPER' && opponent.id === 'SCISSORS') {
      console.log('YOU LOSE')
      this.setState(prevState => ({
        score: prevState.score - 1,
        newGame: true,
        selectedOptions: [value, opponent],
        playAgainStatus: 'YOU LOSE',
      }))
    }
  }

  render() {
    const {
      newGame,
      gameList,
      score,
      selectedOptions,
      playAgainStatus,
    } = this.state
    console.log(newGame, gameList, score, selectedOptions, playAgainStatus)

    return (
      <MainContainer>
        <ScoreBoard dataList={gameList} score={score} />
        <MainHeading>Rock Paper Scissors</MainHeading>
        {newGame ? (
          <ResultBox
            dataList={selectedOptions}
            playAgainStatus={playAgainStatus}
            changeGameStatus={this.changeGameStatus}
          />
        ) : (
          <GameOptions
            dataList={gameList}
            optionSelectedByYou={this.optionSelectedByYou}
          />
        )}
        <RulesContainer>
          <Popup trigger={<Rules>RULES</Rules>} modal nested>
            {close => (
              <RulesImageContainer>
                <RulesImageBox>
                  <RulesImageBoxCloseButton>
                    <PopupCloseButton type="button" onClick={close}>
                      <RiCloseLine />
                    </PopupCloseButton>
                  </RulesImageBoxCloseButton>
                  <RulesText>Rules</RulesText>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImageBox>
              </RulesImageContainer>
            )}
          </Popup>
        </RulesContainer>
      </MainContainer>
    )
  }
}

export default PlayGame
