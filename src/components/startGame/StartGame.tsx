import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/button/button'

import s from './StartGame.module.scss'

type Props = {}

export const gameIsStarted = (isOn: boolean = false) => {
  return isOn
}

export const StartGame = (props: Props) => {
  const [start, setStart] = useState(false)
  // startGame()
  const handleClick = () => {
    gameIsStarted(true)
    setStart(true)
  }

  if (start) {
    return <Navigate to={'/game'} />
  }

  return (
    <div className={s.startGame}>
      <Button className={s.startButton} onClick={handleClick}>
        Start Game!
      </Button>
    </div>
  )
}
