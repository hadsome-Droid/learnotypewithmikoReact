import { useCallback, useEffect, useState } from 'react'

import 'react-simple-keyboard/build/css/index.css'

import s from './Game.module.scss'

import { RandomChar } from '../components/randomChar/RandomChar'
import { UserChar } from '../components/userChar/UserChar'
import { VirtualKeyboard } from '../components/virtualKeyboard/VirtualKeyboard'
import { chars } from '../state/data'

export type LowerOrUpper = 'Lower' | 'None' | 'Upper'

export type Description = {
  isUpper: LowerOrUpper
  language: string
}

export const Game = () => {
  const [userChar, setUserChar] = useState('')
  const [userCharDescription, setUserCharDescription] = useState<Description>({
    isUpper: 'None',
    language: '',
  })
  const [currentChar, setCurrentChar] = useState('')
  const [gameIsOn, setGameIsOn] = useState(true)
  const [success, setSuccess] = useState(false)

  const randomChar = (arr: any) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
  }

  const descriptionChar = (char: string): Description => {
    if (/[А-ЯЁ]/.test(char)) {
      return { isUpper: 'Upper', language: 'Рус' }
    } else if (/[а-яё]/.test(char)) {
      return { isUpper: 'Lower', language: 'Рус' }
    } else if (/[A-Z]/.test(char)) {
      return { isUpper: 'Upper', language: 'Eng' }
    } else if (/[a-z]/.test(char)) {
      return { isUpper: 'Lower', language: 'Eng' }
    } else if (/[0-9]/.test(char)) {
      return { isUpper: 'None', language: 'Цифра' }
    } else {
      return { isUpper: 'None', language: '' }
    }
  }

  // let success = true
  // const fail = false

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      setUserChar(event.key)
      setUserCharDescription(descriptionChar(event.key))
      if (event.key === currentChar) {
        setTimeout(() => {
          setCurrentChar(randomChar(chars))
          setSuccess(false)
        }, 2000)

        setSuccess(true)
      } else if (/^\S$/.test(event.key)) {
        console.log('Error', event.code)
      } else {
        console.log('Error', event.key)
      }
    },
    [currentChar]
  )

  const startGame = () => {
    setCurrentChar(randomChar(chars))
    setGameIsOn(true)
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyDown)

    return () => {
      window.removeEventListener('keyup', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className={`${s.gameContainer} ${success ? s.success : ''}`}>
      <button className={s.superButton} disabled={!gameIsOn} onClick={() => startGame()}>
        Start Game!
      </button>
      <RandomChar description={descriptionChar(currentChar)} randomChar={currentChar} />
      {/*<RandomChar description={{ isUpper: 'Lower', language: 'Eng' }} randomChar={'g'} />*/}
      <UserChar description={userCharDescription} userChar={userChar} />
      <VirtualKeyboard currentChar={currentChar} userChar={userChar} />
    </div>
  )
}
