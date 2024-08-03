import { useCallback, useEffect, useState } from 'react'
import KeyboardReact from 'react-simple-keyboard'

import 'react-simple-keyboard/build/css/index.css'

import s from './Game.module.scss'

import { RandomChar } from '../components/randomChar/RandomChar'
import { UserChar } from '../components/userChar/UserChar'
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
  const fail = false

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
      // else if (/^[a-zA-Z]$/.test(event.key)) {
      //   console.log('Error')
      // } else if (/^[0-9]$/.test(event.key)) {
      //   console.log('Error')
      //   // negativeEvent(key)
      // }
    },
    [currentChar]
  )

  const startGame = () => {
    setCurrentChar(randomChar(chars))
    setGameIsOn(true)
  }

  console.log(s.currentKeyboard)

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
      {/*<RandomChar description={descriptionChar(currentChar)} randomChar={currentChar} />*/}
      <RandomChar description={{ isUpper: 'Lower', language: 'Eng' }} randomChar={'g'} />
      <UserChar description={userCharDescription} userChar={userChar} />
      <KeyboardReact
        baseClass={s.myTheme}
        buttonTheme={[
          {
            buttons: 'g',
            class: `${s.currentKeyboard}`,
          },
        ]}
        display={{
          '{bksp}': '⌫ Backspace',
          '{enter}': 'Enter ⏎',
          '{shift}': '⇧ Shift',
        }}
        layout={{
          default: [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            '{tab} q w e r t y u i o p [ ] \\',
            "{lock} a s d f g h j k l ; ' {enter}",
            '{shift} z x c v b n m , . / {shift}',
            '.com @ {space}',
          ],
          shift: [
            '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
            '{tab} Q W E R T Y U I O P { } |',
            '{lock} A S D F G H J K L : " {enter}',
            '{shift} Z X C V B N M &lt; &gt; ? {shift}',
            '.com @ {space}',
          ],
        }}
      />
    </div>
  )
}
