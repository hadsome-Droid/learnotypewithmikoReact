import { DoubleAngleDown } from '@/assets/icons/components/doubleAngleDown'
import { DoubleAngleUp } from '@/assets/icons/components/doubleAngleUp'
import { RussiaFlag } from '@/assets/icons/components/russiaFlag'
import { SortNumeric } from '@/assets/icons/components/sortNumeric'
import { UnitedKingdomFlag } from '@/assets/icons/components/unitedKingdomFlag'

import s from './RandomChar.module.scss'

type Props = {
  description: Description
  randomChar: string
}

type Description = {
  isUpper: boolean
  language: string
}

export const RandomChar = ({ description, randomChar }: Props) => {
  const rus = description.language === 'Рус'
  const eng = description.language === 'Eng'
  const num = description.language === 'Цифра'

  return (
    <div className={s.randomCharContainer}>
      <div>
        {randomChar}
        {description.isUpper ? (
          <DoubleAngleUp color={'green'} />
        ) : (
          <DoubleAngleDown color={'red'} />
        )}
      </div>
      <div className={s.containerDescription}>
        <span style={{ marginLeft: '10px' }}>{description.language}</span>
        {rus && <RussiaFlag />}
        {eng && <UnitedKingdomFlag />}
        {num && <SortNumeric />}
      </div>
    </div>
  )
}
