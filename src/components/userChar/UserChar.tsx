// import { useState } from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '@/app/store'
import { Char } from '@/components/char/Char'
import { Description } from '@/game/Game'
import { UserCharProps } from '@/model/userChar/userChar-reducer'

export const UserChar = () => {
  const userChar = useSelector<RootState, UserCharProps>(state => state.userChar)

  return (
    <div>
      <Char char={userChar.char} isUpper={userChar.charDescription.isUpper} />
    </div>
  )
}
