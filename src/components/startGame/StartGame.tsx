import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/button/button'

import s from './StartGame.module.scss'

type Props = {}

export const gameIsStarted = (isOn: boolean = false) => {
  return isOn
}

type Stage = '1' | '2' | '3'

export const StartGame = (props: Props) => {
  const [startStage, setStartStage] = useState<Stage>()

  const stageArray: Stage[] = ['1', '2', '3']

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
      <div className={s.startGameContainer}>
        <h1>Уровень 1</h1>
        <div className={s.menu}>
          {stageArray.map((stage, index) => {
            return (
              <Button className={s.startButton} key={index} onClick={() => handleClick(stage)}>
                Стадия {stage}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
