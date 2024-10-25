import { CurrentCharProps, currentCharReducer, updateCurrentCharAC } from './currentChar-reducer'

test('change userChar should be F', () => {
  const startState: CurrentCharProps = {
    char: '',
    charDescription: { isUpper: 'None', language: '' },
  }
  const endState = currentCharReducer(
    startState,
    updateCurrentCharAC('L', { isUpper: 'None', language: '' })
  )

  expect(endState.char).toBe('L')
})
