import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { chars } from '@/app/data'
import { RootState } from '@/app/store'
import { AlignLeftArrow } from '@/assets/icons/components/alignLeftArrow'
import { HighSound } from '@/assets/icons/components/highSound'
import { MuteSound } from '@/assets/icons/components/muteSound'
import { MyParticles } from '@/components/particle/Particle'
import { CurrentCharProps, updateCurrentCharAC } from '@/model/currentChar/currentChar-reducer'
import { Description, updateUserCharAC } from '@/model/userChar/userChar-reducer'

import 'react-simple-keyboard/build/css/index.css'

import s from './Game.module.scss'

import { Button } from '../components/button/button'
import { Emotion, Miko } from '../components/miko/Miko'
import { RandomChar } from '../components/randomChar/RandomChar'
import { UserChar } from '../components/userChar/UserChar'
import { VirtualKeyboard } from '../components/virtualKeyboard/VirtualKeyboard'

type Props = {
  level: Level
}

type Level = {
  stage1: boolean
  stage2: boolean
  stage3: boolean
}

export const Game = ({ level }: Props) => {
  const currentChar = useSelector<RootState, CurrentCharProps>(state => state.currentChar)
  const dispatch = useDispatch()

  const [gameIsOn, setGameIsOn] = useState(true)
  const isKeyboardLockedRef = useRef(false)
  const [audioPlayed, setAudioPlayed] = useState(false)
  const [emotion, setEmotion] = useState<Emotion>('expectation')
  const [voiceOn, setVoiceOn] = useState(true)

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

  const startGame = () => {
    const randoChar = chars[Math.floor(Math.random() * chars.length)]

    if (level.stage1) {
      dispatch(
        updateCurrentCharAC(randoChar.toUpperCase(), descriptionChar(randoChar.toUpperCase()))
      )
    }
    if (level.stage2) {
      dispatch(
        updateCurrentCharAC(randoChar.toLowerCase(), descriptionChar(randoChar.toLowerCase()))
      )
    }
    if (level.stage3) {
      dispatch(updateCurrentCharAC(randoChar, descriptionChar(randoChar)))
    }
    setGameIsOn(true)
  }

  useEffect(() => {
    if (currentChar.char === '') {
      startGame()
    }
  }, [currentChar, startGame])

  const settingStage = useCallback(
    (event: KeyboardEvent) => {
      if (level.stage1) {
        return event.key ? event.key.toUpperCase() : ''
      }
      if (level.stage2) {
        return event.key ? event.key.toLowerCase() : ''
      }

      return event.key ? event.key : ''
    },
    [level]
  )

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      const eventKey = settingStage(event)

      if (!isKeyboardLockedRef.current && !audioPlayed) {
        if (settingStage(event) === currentChar.char) {
          isKeyboardLockedRef.current = true
          setAudioPlayed(true)
          dispatch(updateUserCharAC(eventKey, event.code, descriptionChar(eventKey)))
          setEmotion('happy')
          setTimeout(() => {
            isKeyboardLockedRef.current = false
            dispatch(updateUserCharAC('', '', descriptionChar('')))
            setEmotion('expectation')
            setAudioPlayed(false)
            startGame()
            // setCurrentChar(randomChar(chars))
            // setCurrentChar('g')
          }, 2700)
        } else if (/^\S$/.test(eventKey)) {
          isKeyboardLockedRef.current = true
          setAudioPlayed(true)
          dispatch(updateUserCharAC(eventKey, event.code, descriptionChar(eventKey)))
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
    [currentChar, audioPlayed, level, settingStage]
  )

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp])

  const [comeBack, setComeBack] = useState(false)

  const handleComeBack = () => {
    dispatch(updateUserCharAC('', '', descriptionChar('')))
    dispatch(updateCurrentCharAC('', descriptionChar('')))
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
      <MyParticles isShowFlake={emotion === 'happy'} />
      <Button className={s.superButton} disabled={!gameIsOn} onClick={() => handleComeBack()}>
        <AlignLeftArrow /> Назад к выбору стадии
      </Button>
      <span className={s.stage}>{`${level.stage1 ? 'Стадия 1' : ''} ${
        level.stage2 ? 'Стадия 2' : ''
      } ${level.stage3 ? 'Стадия 3' : ''}`}</span>
      <div className={s.randomChar}>
        <RandomChar />
      </div>
      <div className={s.userChar}>
        <UserChar />
      </div>
      <div className={s.virtualKeyboard}>
        <VirtualKeyboard />
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