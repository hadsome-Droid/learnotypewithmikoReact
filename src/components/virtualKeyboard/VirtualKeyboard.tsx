import { useEffect, useState } from 'react'

import s from './VirtualKeyboard.module.scss'

interface Props {
  currentChar: string
  userChar: string
}

interface Button {
  id: number
  labels: string[]
}

export const VirtualKeyboard = ({ currentChar, userChar }: Props) => {
  // const [highlightedKey, setHighlightedKey] = useState<null | string>(null)
  const [highlightedKey, setHighlightedKey] = useState<string>('')
  // const [charUser, setCharUser] = useState<null | string>(null)
  const [charUser, setCharUser] = useState<string>('')

  const layout: Button[][] = [
    // ... layout definition
    [
      { id: 1, labels: ['~', 'ё', '`', 'Ё'] },
      { id: 2, labels: ['!', '', '1', ''] },
      { id: 3, labels: ['@', '"', '2', ''] },
      { id: 4, labels: ['#', '№', '3', ''] },
      { id: 5, labels: ['$', ';', '4', ''] },
      { id: 6, labels: ['%', '', '5', ''] },
      { id: 7, labels: ['^', ':', '6', ''] },
      { id: 8, labels: ['&', '?', '7', ''] },
      { id: 9, labels: ['*', '', '8', ''] },
      { id: 10, labels: ['(', '', '9', ''] },
      { id: 11, labels: [')', '', '0', ''] },
      { id: 12, labels: ['-', '', '_', ''] },
      { id: 13, labels: ['+', '', '=', ''] },
      { id: 14, labels: ['⇦Backspace'] },
    ],
    [
      { id: 1, labels: ['Tab'] },
      { id: 2, labels: ['Q', '', '', 'Й'] },
      { id: 3, labels: ['W', '', '', 'Ц'] },
      { id: 4, labels: ['E', '', '', 'У'] },
      { id: 5, labels: ['R', '', '', 'К'] },
      { id: 6, labels: ['T', '', '', 'Е'] },
      { id: 7, labels: ['Y', '', '', 'Н'] },
      { id: 8, labels: ['U', '', '', 'Г'] },
      { id: 9, labels: ['I', '', '', 'Ш'] },
      { id: 10, labels: ['O', '', '', 'Щ'] },
      { id: 11, labels: ['P', '', '', 'З'] },
      { id: 12, labels: ['{', '', '[', 'Х'] },
      { id: 13, labels: ['}', '', ']', 'Ъ'] },
      { id: 14, labels: ['|', '', '\\', ''] },
    ],
    [
      { id: 1, labels: ['CapsLock'] },
      { id: 2, labels: ['A', '', '', 'Ф'] },
      { id: 3, labels: ['S', '', '', 'Ы'] },
      { id: 4, labels: ['D', '', '', 'В'] },
      { id: 5, labels: ['F', '', '', 'А'] },
      { id: 6, labels: ['G', '', '', 'П'] },
      { id: 7, labels: ['H', '', '', 'Р'] },
      { id: 8, labels: ['J', '', '', 'О'] },
      { id: 9, labels: ['K', '', '', 'Л'] },
      { id: 10, labels: ['L', '', '', 'Д'] },
      { id: 11, labels: [':', '', ';', 'Ж'] },
      { id: 12, labels: ['"', '', "'", 'Э'] },
      { id: 13, labels: ['Enter ⏎'] },
    ],
    [
      { id: 1, labels: ['⇧ Shift'] },
      { id: 2, labels: ['Z', '', '', 'Я'] },
      { id: 3, labels: ['X', '', '', 'Ч'] },
      { id: 4, labels: ['C', '', '', 'С'] },
      { id: 5, labels: ['V', '', '', 'М'] },
      { id: 6, labels: ['B', '', '', 'И'] },
      { id: 7, labels: ['N', '', '', 'Т'] },
      { id: 8, labels: ['M', '', '', 'Ь'] },
      { id: 9, labels: ['<', '', ',', 'Б'] },
      { id: 10, labels: ['>', '', '.', 'Ю'] },
      { id: 11, labels: ['?', ',', '/', '.'] },
      { id: 12, labels: ['⇧ Shift'] },
    ],
    [
      { id: 1, labels: ['Ctrl'] },
      { id: 2, labels: ['Win'] },
      { id: 3, labels: ['Alt'] },
      { id: 4, labels: ['Space'] },
      { id: 5, labels: ['Alt'] },
      { id: 6, labels: ['Win'] },
      { id: 7, labels: ['Ctrl'] },
    ],
  ]

  // const layout = {
  //   default: [
  //     [
  //       { 1: '~', 2: 'ё', 3: '`', 4: 'Ё', id: 1 },
  //       { 1: '!', 2: '', 3: '1', 4: '', id: 2 },
  //       { 1: '@', 2: '"', 3: '2', 4: '', id: 3 },
  //       { 1: '#', 2: '№', 3: '3', 4: '', id: 4 },
  //       { 1: '$', 2: ';', 3: '4', 4: '', id: 5 },
  //       { 1: '%', 2: '', 3: '5', 4: '', id: 6 },
  //       { 1: '^', 2: ':', 3: '6', 4: '', id: 7 },
  //       { 1: '&', 2: '?', 3: '7', 4: '', id: 8 },
  //       { 1: '*', 2: '', 3: '8', 4: '', id: 9 },
  //       { 1: '(', 2: '', 3: '9', 4: '', id: 10 },
  //       { 1: ')', 2: '', 3: '0', 4: '', id: 11 },
  //       { 1: '-', 2: '', 3: '_', 4: '', id: 12 },
  //       { 1: '+', 2: '', 3: '=', 4: '', id: 13 },
  //       { 1: '⇦Backspace', id: 14 },
  //     ],
  //     [
  //       { 1: 'Tab', id: 1 },
  //       { 1: 'Q', 2: '', 3: '', 4: 'Й', id: 2 },
  //       { 1: 'W', 2: '', 3: '', 4: 'Ц', id: 3 },
  //       { 1: 'E', 2: '', 3: '', 4: 'У', id: 4 },
  //       { 1: 'R', 2: '', 3: '', 4: 'К', id: 5 },
  //       { 1: 'T', 2: '', 3: '', 4: 'Е', id: 6 },
  //       { 1: 'Y', 2: '', 3: '', 4: 'Н', id: 7 },
  //       { 1: 'U', 2: '', 3: '', 4: 'Г', id: 8 },
  //       { 1: 'I', 2: '', 3: '', 4: 'Ш', id: 9 },
  //       { 1: 'O', 2: '', 3: '', 4: 'Щ', id: 10 },
  //       { 1: 'P', 2: '', 3: '', 4: 'З', id: 11 },
  //       { 1: '{', 2: '', 3: '[', 4: 'Х', id: 12 },
  //       { 1: '}', 2: '', 3: ']', 4: 'Ъ', id: 13 },
  //       { 1: '|', 2: '', 3: '\\', 4: '', id: 14 },
  //     ],
  //     [
  //       { 1: 'CapsLock', id: 1 },
  //       { 1: 'A', 2: '', 3: '', 4: 'Ф', id: 2 },
  //       { 1: 'S', 2: '', 3: '', 4: 'Ы', id: 3 },
  //       { 1: 'D', 2: '', 3: '', 4: 'В', id: 4 },
  //       { 1: 'F', 2: '', 3: '', 4: 'А', id: 5 },
  //       { 1: 'G', 2: '', 3: '', 4: 'П', id: 6 },
  //       { 1: 'H', 2: '', 3: '', 4: 'Р', id: 7 },
  //       { 1: 'J', 2: '', 3: '', 4: 'О', id: 8 },
  //       { 1: 'K', 2: '', 3: '', 4: 'Л', id: 9 },
  //       { 1: 'L', 2: '', 3: '', 4: 'Д', id: 10 },
  //       { 1: ':', 2: '', 3: ';', 4: 'Ж', id: 11 },
  //       { 1: '"', 2: '', 3: "'", 4: 'Э', id: 12 },
  //       { 1: 'Enter ⏎', id: 13 },
  //     ],
  //     [
  //       { 1: '⇧ Shift', id: 1 },
  //       { 1: 'Z', 2: '', 3: '', 4: 'Я', id: 2 },
  //       { 1: 'X', 2: '', 3: '', 4: 'Ч', id: 3 },
  //       { 1: 'C', 2: '', 3: '', 4: 'С', id: 4 },
  //       { 1: 'V', 2: '', 3: '', 4: 'М', id: 5 },
  //       { 1: 'B', 2: '', 3: '', 4: 'И', id: 6 },
  //       { 1: 'N', 2: '', 3: '', 4: 'Т', id: 7 },
  //       { 1: 'M', 2: '', 3: '', 4: 'Ь', id: 8 },
  //       { 1: '<', 2: '', 3: ',', 4: 'Б', id: 9 },
  //       { 1: '>', 2: '', 3: '.', 4: 'Ю', id: 10 },
  //       { 1: '?', 2: ',', 3: '/', 4: '.', id: 11 },
  //       { 1: '⇧ Shift', id: 12 },
  //     ],
  //     [
  //       { 1: 'Ctrl', id: 1 },
  //       { 1: 'Win', id: 2 },
  //       { 1: 'Alt', id: 3 },
  //       { 1: 'Space', id: 4 },
  //       { 1: 'Alt', id: 5 },
  //       { 1: 'Win', id: 6 },
  //       { 1: 'Ctrl', id: 7 },
  //     ],
  //   ],
  // }

  useEffect(() => {
    setHighlightedKey(currentChar)
    setCharUser(userChar)
  }, [currentChar, userChar])

  const getButtonClassName = (button: Button) => {
    const classes = [s.Button]

    if (button.labels.includes(highlightedKey.toUpperCase())) {
      classes.push(s.CurrentButton)
    }

    if (button.labels.includes(charUser?.toUpperCase())) {
      classes.push(s.UserButton)
    }

    if (button.labels.includes('⇦Backspace')) {
      classes.push(s.ButtonBackSpace)
    }

    if (button.labels.includes('Tab')) {
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
    // Add additional classes based on button labels

    return classes.join(' ')
  }

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

  // return (
  //   <div className={s.Keyboard}>
  //     {layout.default.map((row, index) => (
  //       <div className={s.Row} key={index}>
  //         {row.map(button => {
  //           const tab = button['1'] === 'Tab' ? s.ButtonTab : ''
  //           const line = button['1'] === '|' ? s.ButtonLine : ''
  //           const capslock = button['1'] === 'CapsLock' ? s.ButtonCapsLock : ''
  //           const shiftBtn = button['1'] === '⇧ Shift' ? s.ButtonShift : ''
  //           const ctrl = button['1'] === 'Ctrl' ? s.ButtonCtrl : ''
  //           const alt = button['1'] === 'Alt' ? s.ButtonAlt : ''
  //           const backSpace = button['1'] === '⇦Backspace' ? s.ButtonBackSpace : ''
  //           const enter = button['1'] === 'Enter ⏎' ? s.ButtonEnter : ''
  //           const space = button['1'] === 'Space' ? s.ButtonSpace : ''
  //           const wind = button['1'] === 'Win' ? s.ButtonWin : ''
  //
  //           const currentButton =
  //             button['1'] === highlightedKey?.toUpperCase() ||
  //             button['2'] === highlightedKey?.toUpperCase() ||
  //             button['3'] === highlightedKey?.toUpperCase() ||
  //             button['4'] === highlightedKey?.toUpperCase()
  //               ? s.CurrentButton
  //               : ''
  //
  //           const userButton =
  //             button['1'] === charUser?.toUpperCase() ||
  //             button['2'] === charUser?.toUpperCase() ||
  //             button['3'] === charUser?.toUpperCase() ||
  //             button['4'] === charUser?.toUpperCase()
  //               ? s.UserButton
  //               : ''
  //
  //           return (
  //             <div
  //               className={`${s.Button} ${tab} ${capslock} ${shiftBtn} ${ctrl} ${alt} ${backSpace} ${enter} ${space} ${line} ${wind} ${currentButton} ${userButton}`}
  //               key={button.id}
  //             >
  //               <span
  //                 className={`${s.ButtonDescription} ${
  //                   button['1'] === highlightedKey?.toUpperCase() ? s.UserButtonDescription : ''
  //                 }`}
  //               >
  //                 {button['1']}
  //               </span>
  //               <span
  //                 className={`${s.ButtonDescription} ${
  //                   button['2'] === highlightedKey?.toUpperCase() ? s.UserButtonDescription : ''
  //                 }`}
  //               >
  //                 {button['2']}
  //               </span>
  //               <span
  //                 className={`${s.ButtonDescription} ${
  //                   button['3'] === highlightedKey?.toUpperCase() ? s.UserButtonDescription : ''
  //                 }`}
  //               >
  //                 {button['3']}
  //               </span>
  //               <span
  //                 className={`${s.ButtonDescription} ${
  //                   button['4'] === highlightedKey?.toUpperCase() ? s.UserButtonDescription : ''
  //                 }`}
  //               >
  //                 {button['4']}
  //               </span>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     ))}
  //   </div>
  // )
}
