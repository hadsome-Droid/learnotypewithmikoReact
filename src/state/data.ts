export interface Button {
  id: string
  labels: Element[]
}
type Element = null | string

export const chars = [
  // Русские буквы
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ё',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ы',
  'Ь',
  'Э',
  'Ю',
  'Я',
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я',

  // Английские буквы
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',

  // Цифры
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

export const mediaSources = {
  expectation: [
    {
      audioSrc: '',
      id: 1,
      imgSrc: '/src/assets/image/miko/mikoIsWaiting.png',
    },
  ],
  happy: [
    {
      audioSrc: '/src/assets/audio/happy/happy1.mp3',
      id: 1,
      imgSrc: '/src/assets/image/miko/happy/happy1.png',
    },
    {
      audioSrc: '/src/assets/audio/happy/happy2.mp3',
      id: 2,
      imgSrc: '/src/assets/image/miko/happy/happy2.png',
    },
    {
      audioSrc: '/src/assets/audio/happy/happy3.mp3',
      id: 3,
      imgSrc: '/src/assets/image/miko/happy/happy3.png',
    },
    {
      audioSrc: '/src/assets/audio/happy/happy4.mp3',
      id: 4,
      imgSrc: '/src/assets/image/miko/happy/happy4.png',
    },
    {
      audioSrc: '/src/assets/audio/happy/happy5.mp3',
      id: 5,
      imgSrc: '/src/assets/image/miko/happy/happy5.png',
    },
    {
      audioSrc: '/src/assets/audio/happy/happy6.mp3',
      id: 6,
      imgSrc: '/src/assets/image/miko/happy/happy6.png',
    },
  ],
  inspiration: [
    {
      audioSrc: '/src/assets/audio/inspiration/inspiration1.mp3',
      id: 1,
      imgSrc: '/src/assets/image/miko/inspiration/inspiration1.png',
    },
    {
      audioSrc: '/src/assets/audio/inspiration/inspiration2.mp3',
      id: 2,
      imgSrc: '/src/assets/image/miko/inspiration/inspiration2.png',
    },
    {
      audioSrc: '/src/assets/audio/inspiration/inspiration3.mp3',
      id: 3,
      imgSrc: '/src/assets/image/miko/inspiration/inspiration3.png',
    },
    {
      audioSrc: '/src/assets/audio/inspiration/inspiration4.mp3',
      id: 4,
      imgSrc: '/src/assets/image/miko/inspiration/inspiration4.png',
    },
    {
      audioSrc: '/src/assets/audio/inspiration/inspiration5.mp3',
      id: 5,
      imgSrc: '/src/assets/image/miko/inspiration/inspiration5.png',
    },
  ],
}

export const layout: Button[][] = [
  [
    { id: 'Backquote', labels: ['~', 'ё', '`', 'Ё'] },
    { id: 'Digit1', labels: ['!', null, '1', null] },
    { id: 'Digit2', labels: ['@', '"', '2', null] },
    { id: 'Digit3', labels: ['#', '№', '3', null] },
    { id: 'Digit4', labels: ['$', ';', '4', null] },
    { id: 'Digit5', labels: ['%', null, '5', null] },
    { id: 'Digit6', labels: ['^', ':', '6', null] },
    { id: 'Digit7', labels: ['&', '?', '7', null] },
    { id: 'Digit8', labels: ['*', null, '8', null] },
    { id: 'Digit9', labels: ['(', null, '9', null] },
    { id: 'Digit0', labels: [')', null, '0', null] },
    { id: 'Minus', labels: ['_', null, '-', null] },
    { id: 'Equal', labels: ['+', null, '=', null] },
    { id: 'Backspace', labels: ['⇦Backspace'] },
  ],
  [
    { id: 'Tab', labels: ['Tab↹'] },
    { id: 'KeyQ', labels: ['Q', null, null, 'Й'] },
    { id: 'KeyW', labels: ['W', null, null, 'Ц'] },
    { id: 'KeyE', labels: ['E', null, null, 'У'] },
    { id: 'KeyR', labels: ['R', null, null, 'К'] },
    { id: 'KeyT', labels: ['T', null, null, 'Е'] },
    { id: 'KeyY', labels: ['Y', null, null, 'Н'] },
    { id: 'KeyU', labels: ['U', null, null, 'Г'] },
    { id: 'KeyI', labels: ['I', null, null, 'Ш'] },
    { id: 'KeyO', labels: ['O', null, null, 'Щ'] },
    { id: 'KeyP', labels: ['P', null, null, 'З'] },
    { id: 'BracketLeft', labels: ['{', null, '[', 'Х'] },
    { id: 'BracketRight', labels: ['}', null, ']', 'Ъ'] },
    { id: 'Backslash', labels: ['|', null, '\\', null] },
  ],
  [
    { id: 'CapsLock', labels: ['CapsLock'] },
    { id: 'KeyA', labels: ['A', null, null, 'Ф'] },
    { id: 'KeyS', labels: ['S', null, null, 'Ы'] },
    { id: 'KeyD', labels: ['D', null, null, 'В'] },
    { id: 'KeyF', labels: ['F', null, null, 'А'] },
    { id: 'KeyG', labels: ['G', null, null, 'П'] },
    { id: 'KeyH', labels: ['H', null, null, 'Р'] },
    { id: 'KeyJ', labels: ['J', null, null, 'О'] },
    { id: 'KeyK', labels: ['K', null, null, 'Л'] },
    { id: 'KeyL', labels: ['L', null, null, 'Д'] },
    { id: 'Semicolon', labels: [':', null, ';', 'Ж'] },
    { id: 'Quote', labels: ['"', null, "'", 'Э'] },
    { id: 'Enter', labels: ['Enter ⏎'] },
  ],
  [
    { id: 'ShiftLeft', labels: ['⇧ Shift'] },
    { id: 'KeyZ', labels: ['Z', null, null, 'Я'] },
    { id: 'KeyX', labels: ['X', null, null, 'Ч'] },
    { id: 'KeyC', labels: ['C', null, null, 'С'] },
    { id: 'KeyV', labels: ['V', null, null, 'М'] },
    { id: 'KeyB', labels: ['B', null, null, 'И'] },
    { id: 'KeyN', labels: ['N', null, null, 'Т'] },
    { id: 'KeyM', labels: ['M', null, null, 'Ь'] },
    { id: 'Comma', labels: ['<', null, ',', 'Б'] },
    { id: 'Period', labels: ['>', null, '.', 'Ю'] },
    { id: 'Slash', labels: ['?', ',', '/', '.'] },
    { id: 'ShiftRight', labels: ['⇧ Shift'] },
  ],
  [
    { id: 'ControlLeft', labels: ['Ctrl'] },
    { id: 'MetaLeft', labels: ['Win'] },
    { id: 'AltLeft', labels: ['Alt'] },
    { id: 'Space', labels: ['Space'] },
    { id: 'AltRight', labels: ['Alt'] },
    { id: 'ContextMenu', labels: ['☰'] },
    { id: 'ControlRight', labels: ['Ctrl'] },
  ],
]
