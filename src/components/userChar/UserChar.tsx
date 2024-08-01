// import { useState } from 'react'

type Props = {
  userChar: string
}

export const UserChar = ({ userChar }: Props) => {
  // const [userInput, setUserInput] = useState('')
  //
  // setUserInput(userChar)

  return <div style={{ color: 'green' }}>{userChar}</div>
}
