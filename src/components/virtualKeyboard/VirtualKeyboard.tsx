import { useCallback, useEffect, useState } from 'react'

import { Button, layout } from '@/state/data'

import s from './VirtualKeyboard.module.scss'

interface Props {
  currentChar: string
  userChar: Char
}
type Char = {
  char: string
  id: string
}
export const VirtualKeyboard = ({ currentChar, userChar }: Props) => {
  const [highlightedKey, setHighlightedKey] = useState<string>('')
  const [charUser, setCharUser] = useState<string>('')

  useEffect(() => {
    setHighlightedKey(currentChar)
    setCharUser(userChar.char)
  }, [currentChar, userChar])

  const getButtonClassName = useCallback(
    (button: Button) => {
      const classes = [s.Button]

      if (button.labels.includes(highlightedKey.toUpperCase())) {
        classes.push(s.CurrentButton)
      }

      if (charUser !== highlightedKey && button.labels.includes(charUser?.toUpperCase())) {
        if (userChar.id === button.id) {
          classes.push(s.UserButton)
        }
      }

      if (button.labels.includes('⇦Backspace')) {
        classes.push(s.ButtonBackSpace)
      }

      if (button.labels.includes('Tab↹')) {
        classes.push(s.ButtonTab)
      }

      if (button.labels.includes('|')) {
        classes.push(s.ButtonLine)
      }

      if (button.labels.includes('CapsLock')) {
        classes.push(s.ButtonCapsLock)
      }

      if (button.labels.includes('⇧ Shift')) {
        classes.push(s.ButtonShift)
      }

      if (button.labels.includes('Enter ⏎')) {
        classes.push(s.ButtonEnter)
      }

      if (button.labels.includes('Ctrl')) {
        classes.push(s.ButtonCtrl)
      }

      if (button.labels.includes('Alt')) {
        classes.push(s.ButtonAlt)
      }

      if (button.labels.includes('Space')) {
        classes.push(s.ButtonSpace)
      }

      if (button.labels.includes('Win')) {
        classes.push(s.ButtonWin)
      }
      if (button.labels.includes('☰')) {
        classes.push(s.ButtonWin)
      }
      // Add additional classes based on button labels

      return classes.join(' ')
    },
    [charUser, highlightedKey]
  )

  return (
    <div className={s.Keyboard}>
      {layout.map((row, index) => (
        <div className={s.Row} key={index}>
          {row.map(button => (
            <div className={getButtonClassName(button)} key={button.id}>
              {button.labels.map((label, index) => (
                <span
                  className={`${s.ButtonDescription} ${
                    label === highlightedKey?.toUpperCase() ? s.UserButtonDescription : ''
                  }`}
                  key={index}
                >
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
