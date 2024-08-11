import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { chars } from '@/state/data'

import 'react-simple-keyboard/build/css/index.css'

import s from './Game.module.scss'

import { Button } from '../components/button/button'
import { Emotion, Miko } from '../components/miko/Miko'
import { RandomChar } from '../components/randomChar/RandomChar'
import { UserChar } from '../components/userChar/UserChar'
import { VirtualKeyboard } from '../components/virtualKeyboard/VirtualKeyboard'

export type LowerOrUpper = 'Lower' | 'None' | 'Upper'

export type Description = {
  isUpper: LowerOrUpper
  language: string
}

export const Game = () => {
  const [userChar, setUserChar] = useState({ char: '', id: '' })
  const [userCharDescription, setUserCharDescription] = useState<Description>({
    isUpper: 'None',
    language: '',
  })
  const [currentChar, setCurrentChar] = useState('')
  const [gameIsOn, setGameIsOn] = useState(true)
  const isKeyboardLockedRef = useRef(false)
  const [audioPlayed, setAudioPlayed] = useState(false)
  const [emotion, setEmotion] = useState<Emotion>('expectation')

  const randomChar = (arr: any) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
  }

  const startGame = () => {
    setCurrentChar(randomChar(chars))
    // setCurrentChar('g')
    setGameIsOn(true)
  }

  if (currentChar === '') {
    startGame()
    console.log('poebda')
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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isKeyboardLockedRef.current && !audioPlayed) {
        if (event.key === currentChar) {
          isKeyboardLockedRef.current = true
          setAudioPlayed(true)
          setUserChar({ char: event.key, id: event.code })
          setUserCharDescription(descriptionChar(event.key))
          setEmotion('happy')
          setTimeout(() => {
            isKeyboardLockedRef.current = false
            setEmotion('expectation')
            setAudioPlayed(false)
            setCurrentChar(randomChar(chars))
            // setCurrentChar('g')
          }, 2700)
        } else if (/^\S$/.test(event.key)) {
          isKeyboardLockedRef.current = true
          setAudioPlayed(true)
          setUserChar({ char: event.key, id: event.code })
          setUserCharDescription(descriptionChar(event.key))
          setEmotion('inspiration')
          setTimeout(() => {
            isKeyboardLockedRef.current = false
            setEmotion('expectation')
            setAudioPlayed(false)
          }, 2700)
        } else {
          // console.log('Error', event.key)
        }
      }
    },
    [currentChar, audioPlayed]
  )

  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown)

    return () => {
      document.removeEventListener('keyup', handleKeyDown)
    }
  }, [handleKeyDown])

  const [comeBack, setComeBack] = useState(false)

  const handleComeBack = () => {
    setComeBack(true)
  }

  if (comeBack) {
    return <Navigate to={'/'} />
  }

  return (
    <div
      className={`${s.gameContainer} ${emotion === 'happy' ? s.success : ''} ${
        emotion === 'inspiration' ? s.fail : ''
      }`}
    >
      <Button className={s.superButton} disabled={!gameIsOn} onClick={() => handleComeBack()}>
        Return Start Game
      </Button>
      <div className={s.randomChar}>
        <RandomChar description={descriptionChar(currentChar)} randomChar={currentChar} />
      </div>
      <div className={s.userChar}>
        <UserChar description={userCharDescription} userChar={userChar.char} />
      </div>
      <div className={s.virtualKeyboard}>
        <VirtualKeyboard currentChar={currentChar} userChar={userChar} />
      </div>
      <div className={s.miko}>
        <Miko emotion={emotion} />
      </div>
    </div>
  )
}
