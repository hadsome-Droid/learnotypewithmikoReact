import { Description } from '../userChar/userChar-reducer'

export type CurrentCharProps = {
  char: string
  charDescription: Description
}

type Action = ReturnType<typeof updateCurrentCharAC>

const initialState: CurrentCharProps = {
  char: '',
  charDescription: { isUpper: 'None', language: '' },
}

export const currentCharReducer = (state: CurrentCharProps = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE-CURRENT-CHAR': {
      return {
        ...state,
        char: action.payload.char,
        charDescription: {
          isUpper: action.payload.charDescription.isUpper,
          language: action.payload.charDescription.language,
        },
      }
    }
    default:
      return state
  }
}

export const updateCurrentCharAC = (char: string, charDescription: Description) => {
  return { payload: { char, charDescription }, type: 'UPDATE-CURRENT-CHAR' } as const
}
