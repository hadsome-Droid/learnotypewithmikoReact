import { useEffect, useState } from 'react'

import s from './VirtualKeyboard.module.scss'

interface Props {
  currentChar: string
}

export const VirtualKeyboard = ({ currentChar }: Props) => {
  const [highlightedKey, setHighlightedKey] = useState<null | string>(null)

  const layout = {
    default: [
      [
        { 1: '~', 2: 'ё', 3: '`', 4: 'Ё', id: 1 },
        { 1: '!', 2: '', 3: '1', 4: '', id: 2 },
        { 1: '@', 2: '"', 3: '2', 4: '', id: 3 },
        { 1: '#', 2: '№', 3: '3', 4: '', id: 4 },
        { 1: '$', 2: ';', 3: '4', 4: '', id: 5 },
        { 1: '%', 2: '', 3: '5', 4: '', id: 6 },
        { 1: '^', 2: ':', 3: '6', 4: '', id: 7 },
        { 1: '&', 2: '?', 3: '7', 4: '', id: 8 },
        { 1: '*', 2: '', 3: '8', 4: '', id: 9 },
        { 1: '(', 2: '', 3: '9', 4: '', id: 10 },
        { 1: ')', 2: '', 3: '0', 4: '', id: 11 },
        { 1: '-', 2: '', 3: '_', 4: '', id: 12 },
        { 1: '+', 2: '', 3: '=', 4: '', id: 13 },
        { 1: '⇦Backspace', id: 14 },
      ],
      [
        { 1: 'Tab', id: 1 },
        { 1: 'Q', 2: '', 3: '', 4: 'Й', id: 2 },
        { 1: 'W', 2: '', 3: '', 4: 'Ц', id: 3 },
        { 1: 'E', 2: '', 3: '', 4: 'У', id: 4 },
        { 1: 'R', 2: '', 3: '', 4: 'К', id: 5 },
        { 1: 'T', 2: '', 3: '', 4: 'Е', id: 6 },
        { 1: 'Y', 2: '', 3: '', 4: 'Н', id: 7 },
        { 1: 'U', 2: '', 3: '', 4: 'Г', id: 8 },
        { 1: 'I', 2: '', 3: '', 4: 'Ш', id: 9 },
        { 1: 'O', 2: '', 3: '', 4: 'Щ', id: 10 },
        { 1: 'P', 2: '', 3: '', 4: 'З', id: 11 },
        { 1: '{', 2: '', 3: '[', 4: 'Х', id: 12 },
        { 1: '}', 2: '', 3: ']', 4: 'Ъ', id: 13 },
        { 1: '|', 2: '', 3: "\\'", 4: '', id: 14 },
      ],
      [
        { 1: 'CapsLock', id: 1 },
        { 1: 'A', 2: '', 3: '', 4: 'Ф', id: 2 },
        { 1: 'S', 2: '', 3: '', 4: 'Ы', id: 3 },
        { 1: 'D', 2: '', 3: '', 4: 'В', id: 4 },
        { 1: 'F', 2: '', 3: '', 4: 'А', id: 5 },
        { 1: 'G', 2: '', 3: '', 4: 'П', id: 6 },
        { 1: 'H', 2: '', 3: '', 4: 'Р', id: 7 },
        { 1: 'J', 2: '', 3: '', 4: 'О', id: 8 },
        { 1: 'K', 2: '', 3: '', 4: 'Л', id: 9 },
        { 1: 'L', 2: '', 3: '', 4: 'Д', id: 10 },
        { 1: ':', 2: '', 3: ';', 4: 'Ж', id: 11 },
        { 1: '"', 2: '', 3: '', 4: 'Э', id: 12 },
        { 1: 'Enter ⏎', id: 13 },
      ],
      [
        { 1: '⇧ Shift', id: 1 },
        { 1: 'Z', 2: '', 3: '', 4: 'Я', id: 2 },
        { 1: 'X', 2: '', 3: '', 4: 'Ч', id: 3 },
        { 1: 'C', 2: '', 3: '', 4: 'С', id: 4 },
        { 1: 'V', 2: '', 3: '', 4: 'М', id: 5 },
        { 1: 'B', 2: '', 3: '', 4: 'И', id: 6 },
        { 1: 'N', 2: '', 3: '', 4: 'Т', id: 7 },
        { 1: 'M', 2: '', 3: '', 4: 'Ь', id: 8 },
        { 1: '<', 2: '', 3: ',', 4: 'Б', id: 9 },
        { 1: '>', 2: '', 3: '.', 4: 'Ю', id: 10 },
        { 1: '?', 2: ',', 3: '/', 4: '.', id: 11 },
        { 1: '⇧ Shift', id: 12 },
      ],
      [
        { 1: 'Ctrl', id: 1 },
        { 1: 'Win', id: 2 },
        { 1: 'Alt', id: 3 },
        { 1: 'Space', id: 4 },
        { 1: 'Alt', id: 5 },
        { 1: 'Win', id: 6 },
        { 1: 'Ctrl', id: 7 },
      ],
    ],
  }

  useEffect(() => {
    setHighlightedKey(currentChar)
  }, [currentChar])

  return (
    <div className={s.Keyboard}>
      {layout.default.map((row, index) => (
        <div className={s.Row} key={index}>
          {row.map(button => {
            const tab = button['1'] === 'Tab' ? s.ButtonTab : ''
            const line = button['1'] === '|' ? s.ButtonLine : ''
            const capslock = button['1'] === 'CapsLock' ? s.ButtonCapsLock : ''
            const shiftBtn = button['1'] === '⇧ Shift' ? s.ButtonShift : ''
            const ctrl = button['1'] === 'Ctrl' ? s.ButtonCtrl : ''
            const alt = button['1'] === 'Alt' ? s.ButtonAlt : ''
            const backSpace = button['1'] === '⇦Backspace' ? s.ButtonBackSpace : ''
            const enter = button['1'] === 'Enter ⏎' ? s.ButtonEnter : ''
            const space = button['1'] === 'Space' ? s.ButtonSpace : ''
            const wind = button['1'] === 'Win' ? s.ButtonWin : ''

            const currentButton =
              button['1'] === highlightedKey?.toUpperCase() ||
              button['2'] === highlightedKey?.toUpperCase() ||
              button['3'] === highlightedKey?.toUpperCase() ||
              button['4'] === highlightedKey?.toUpperCase()
                ? s.CurrentButton
                : ''

            return (
              <div
                className={`${s.Button} ${tab} ${capslock} ${shiftBtn} ${ctrl} ${alt} ${backSpace} ${enter} ${space} ${line} ${wind} ${currentButton}`}
                key={button.id}
              >
                <span className={s.ButtonDescription}>{button['1']}</span>
                <span className={s.ButtonDescription}>{button['2']}</span>
                <span className={s.ButtonDescription}>{button['3']}</span>
                <span className={s.ButtonDescription}>{button['4']}</span>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
