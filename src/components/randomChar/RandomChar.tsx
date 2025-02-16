import { useSelector } from 'react-redux'

import s from './RandomChar.module.scss'

import { RootState } from '../../app/store'
import { RussiaFlag } from '../../assets/icons/components/russiaFlag'
import { SortNumeric } from '../../assets/icons/components/sortNumeric'
import { UnitedKingdomFlag } from '../../assets/icons/components/unitedKingdomFlag'
import { Char } from '../../components/char/Char'
import { CurrentCharProps } from '../../model/currentChar/currentChar-reducer'

export const RandomChar = () => {
  const { char, charDescription } = useSelector<RootState, CurrentCharProps>(
    state => state.currentChar
  )
  const rus = charDescription.language === 'Рус'
  const eng = charDescription.language === 'Eng'
  const num = charDescription.language === 'Цифра'

  return (
    <div className={s.randomCharContainer}>
      <div className={s.charBox}>
        <Char char={char} isUpper={charDescription.isUpper} />
      </div>

      <div className={s.containerDescription}>
        <span>{charDescription.language}</span>
        {rus && <RussiaFlag />}
        {eng && <UnitedKingdomFlag />}
        {num && <SortNumeric size={30} />}
      </div>
    </div>
  )
}
