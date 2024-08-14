import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { HighSound } from '@/assets/icons/components/highSound'
import { MusicStop } from '@/assets/icons/components/musicStop'
import { MuteSound } from '@/assets/icons/components/muteSound'
import { Button } from '@/components/button/button'

import s from './StartGame.module.scss'

type Props = {}

export const gameIsStarted = (isOn: boolean = false) => {
  return isOn
}

type Stage = '1' | '2' | '3'

export const StartGame = (props: Props) => {
  const [startStage, setStartStage] = useState<Stage>()
  // startGame()
  const handleClick = (st: Stage) => {
    gameIsStarted(true)
    setStartStage(st)
  }

  if (startStage === '1') {
    return <Navigate to={'/game/level/stage1'} />
  } else if (startStage === '2') {
    return <Navigate to={'/game/level/stage2'} />
  } else if (startStage === '3') {
    return <Navigate to={'/game/level/stage3'} />
  }

  return (
    <div className={s.startGame}>
      <div className={s.menu}>
        <Button className={s.startButton} onClick={() => handleClick('1')}>
          <MusicStop /> Start Game Stage 1!
        </Button>
        <Button className={s.startButton} onClick={() => handleClick('2')}>
          <HighSound /> Start Game Stage 2!
        </Button>
        <Button className={s.startButton} onClick={() => handleClick('3')}>
          <MuteSound color={'white'} /> Start Game Stage 3!
        </Button>
      </div>
    </div>
  )
}
