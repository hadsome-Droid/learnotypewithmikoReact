// import { useState } from 'react'

import { Char } from '@/components/char/Char'
import { Description } from '@/game/Game'

type Props = {
  description: Description
  userChar: string
}

export const UserChar = ({ description, userChar }: Props) => {
  // const [userInput, setUserInput] = useState('')
  //
  // setUserInput(userChar)

  return (
    <div>
      <Char char={userChar} isUpper={description.isUpper} />
    </div>
  )
}
