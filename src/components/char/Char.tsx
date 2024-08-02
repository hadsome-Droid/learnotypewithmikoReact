import { DoubleAngleDown } from '@/assets/icons/components/doubleAngleDown'
import { DoubleAngleUp } from '@/assets/icons/components/doubleAngleUp'

import s from './Char.module.scss'

type Props = {
  char: string
  isUpper?: boolean
}

export const Char = ({ char, isUpper }: Props) => {
  return (
    <div className={s.Char}>
      {char}
      <div className={s.isUpper}>
        {isUpper ? (
          <DoubleAngleUp color={'green'} size={54} />
        ) : (
          <DoubleAngleDown color={'red'} size={34} />
        )}
      </div>
    </div>
  )
}
