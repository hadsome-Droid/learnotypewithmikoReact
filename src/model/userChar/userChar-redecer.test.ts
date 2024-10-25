import { UserCharProps, updateUserCharAC, userCharReducer } from './userChar-reducer'

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('change userChar should be F', () => {
  const startState: UserCharProps = {
    char: '',
    charDescription: { isUpper: 'None', language: '' },
    id: '',
  }
  const endState = userCharReducer(
    startState,
    updateUserCharAC('F', '5', { isUpper: 'None', language: '' })
  )

  expect(endState.char).toBe('F')
  expect(endState.id).toBe('5')
})

test('change charDescription ', () => {
  const startState: UserCharProps = {
    char: '',
    charDescription: { isUpper: 'None', language: '' },
    id: '',
  }

  const endState = userCharReducer(
    startState,
    updateUserCharAC('F', '5', { isUpper: 'Upper', language: 'Eng' })
  )

  expect(endState.charDescription.isUpper).toBe('Upper')
  expect(endState.charDescription.language).toBe('Eng')
})
