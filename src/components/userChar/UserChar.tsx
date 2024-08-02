// import { useState } from 'react'

import { Char } from '@/components/char/Char'

type Props = {
  userChar: string
}

export const UserChar = ({ userChar }: Props) => {
  // const [userInput, setUserInput] = useState('')
  //
  // setUserInput(userChar)

  return (
    <div>
      <Char char={userChar} />
    </div>
  )
}
