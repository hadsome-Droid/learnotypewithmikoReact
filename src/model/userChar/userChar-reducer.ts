export type LowerOrUpper = 'Lower' | 'None' | 'Upper'

export type Description = {
  isUpper: LowerOrUpper
  language: string
}

export type UserCharProps = {
  char: string
  charDescription: Description
  id: string
}

type Action = ReturnType<typeof updateUserCharAC>

const initialState: UserCharProps = {
  char: '',
  charDescription: { isUpper: 'None', language: '' },
  id: '',
}

export const userCharReducer = (
  state: UserCharProps = initialState,
  action: Action
): UserCharProps => {
  switch (action.type) {
    case 'UPDATE-USER-CHAR': {
      return {
        ...state,
        char: action.payload.char,
        charDescription: {
          ...state.charDescription,
          isUpper: action.payload.charDescription.isUpper,
          language: action.payload.charDescription.language,
        },
        id: action.payload.id,
      }
    }
    default:
      return state
  }
}

export const updateUserCharAC = (char: string, id: string, charDescription: Description) => {
  return {
    payload: {
      char,
      charDescription,
      id,
    },
    type: 'UPDATE-USER-CHAR',
  } as const
}
