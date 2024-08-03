import { RussiaFlag } from '@/assets/icons/components/russiaFlag'
import { SortNumeric } from '@/assets/icons/components/sortNumeric'
import { UnitedKingdomFlag } from '@/assets/icons/components/unitedKingdomFlag'
import { Char } from '@/components/char/Char'
import { Description } from '@/game/Game'

import s from './RandomChar.module.scss'

type Props = {
  description: Description
  randomChar: string
}

export const RandomChar = ({ description, randomChar }: Props) => {
  const rus = description.language === 'Рус'
  const eng = description.language === 'Eng'
  const num = description.language === 'Цифра'

  return (
    <div className={s.randomCharContainer}>
      <div className={s.charBox}>
        <Char char={randomChar} isUpper={description.isUpper} />
      </div>

      <div className={s.containerDescription}>
        <span>{description.language}</span>
        {rus && <RussiaFlag />}
        {eng && <UnitedKingdomFlag />}
        {num && <SortNumeric size={30} />}
      </div>
    </div>
  )
}
