import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { AlignLeftArrow } from '@/assets/icons/components/alignLeftArrow'
import { HighSound } from '@/assets/icons/components/highSound'
import { MuteSound } from '@/assets/icons/components/muteSound'
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

type Props = {
  level: Level
}

type Level = {
  stage1: boolean
  stage2: boolean
  stage3: boolean
}
export const Game = ({ level }: Props) => {
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
  const [voiceOn, setVoiceOn] = useState(true)

  const randomChar = (arr: any) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
  }

  const startGame = () => {
    if (level.stage1) {
      console.log('stage 1')
      setCurrentChar(randomChar(chars).toUpperCase())
    }
    if (level.stage2) {
      console.log('stage 2')
      setCurrentChar(randomChar(chars).toLowerCase())
    }
    if (level.stage3) {
      console.log('stage 3')
      setCurrentChar(randomChar(chars))
    }
    // setCurrentChar('g')
    setGameIsOn(true)
  }

  if (currentChar === '') {
    startGame()
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

  const positiveCase = (event: KeyboardEvent) => {
    if (level.stage1) {
      return event.key ? event.key.toUpperCase() : ''
    }
    if (level.stage2) {
      return event.key ? event.key.toLowerCase() : ''
    }

    return event.key ? event.key : ''
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const eventKey = positiveCase(event)

      if (!isKeyboardLockedRef.current && !audioPlayed) {
        if (positiveCase(event) === currentChar) {
          isKeyboardLockedRef.current = true
          setAudioPlayed(true)
          setUserChar({ char: eventKey, id: event.code })
          setUserCharDescription(descriptionChar(eventKey))
          setEmotion('happy')
          setTimeout(() => {
            isKeyboardLockedRef.current = false
            setEmotion('expectation')
            setAudioPlayed(false)
            if (level.stage1) {
              console.log('stage 1')
              setCurrentChar(randomChar(chars).toUpperCase())
            }
            if (level.stage2) {
              console.log('stage 2')
              setCurrentChar(randomChar(chars).toLowerCase())
            }
            if (level.stage3) {
              console.log('stage 3')
              setCurrentChar(randomChar(chars))
            }
            // setCurrentChar(randomChar(chars))
            // setCurrentChar('g')
          }, 2700)
        } else if (/^\S$/.test(eventKey)) {
          isKeyboardLockedRef.current = true
          setAudioPlayed(true)
          setUserChar({ char: eventKey, id: event.code })
          setUserCharDescription(descriptionChar(eventKey))
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
    [currentChar, audioPlayed, level, positiveCase]
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

  const handleVoiceOn = () => {
    setVoiceOn(!voiceOn)
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
        <AlignLeftArrow /> Назад к выбору стадии
      </Button>
      <span className={s.stage}>{`${level.stage1 ? 'Стадия 1' : ''} ${
        level.stage2 ? 'Стадия 2' : ''
      } ${level.stage3 ? 'Стадия 3' : ''}`}</span>
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
        <Miko emotion={emotion} isVoiceOn={voiceOn} />
      </div>
      <Button className={`${s.voice} ${!voiceOn ? s.voiceOff : ''}`} onClick={handleVoiceOn}>
        {voiceOn ? <HighSound /> : <MuteSound />}
      </Button>
    </div>
  )
}
