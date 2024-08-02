import { useCallback, useEffect, useState } from 'react'

import s from './Game.module.scss'

import { RandomChar } from '../components/randomChar/RandomChar'
import { UserChar } from '../components/userChar/UserChar'
import { chars } from '../state/data'

export const Game = () => {
  const [userChar, setUserChar] = useState('')
  const [currentChar, setCurrentChar] = useState('')
  const [gameIsOn, setGameIsOn] = useState(true)

  const randomChar = (arr: any) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
  }

  const descriptionChar = () => {
    if (/[А-ЯЁ]/.test(currentChar)) {
      return { isUpper: true, language: 'Рус' }
    } else if (/[а-яё]/.test(currentChar)) {
      return { isUpper: false, language: 'Рус' }
    } else if (/[A-Z]/.test(currentChar)) {
      return { isUpper: true, language: 'Eng' }
    } else if (/[a-z]/.test(currentChar)) {
      return { isUpper: false, language: 'Eng' }
    } else if (/[0-9]/.test(currentChar)) {
      return { isUpper: false, language: 'Цифра' }
    } else {
      return { isUpper: false, language: '' }
    }
  }

  let success = false
  const fail = false

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      setUserChar(event.key)

      if (event.key === currentChar) {
        setCurrentChar(randomChar(chars))
        success = true
      } else if (/^[а-яёА-ЯЁ]$/.test(event.key)) {
        console.log('Error')
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        console.log('Error')
      } else if (/^[0-9]$/.test(event.key)) {
        console.log('Error')
        // negativeEvent(key)
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
    <div className={s.gameContainer}>
      <button
        className={`${s.superButton} ${success ? s.success : ''}`}
        disabled={!gameIsOn}
        onClick={() => startGame()}
      >
        Start Game!
      </button>
      <RandomChar description={descriptionChar()} randomChar={currentChar} />
      <UserChar userChar={userChar} />
    </div>
  )
}
