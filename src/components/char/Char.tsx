import { DoubleAngleDown } from '@/assets/icons/components/doubleAngleDown'
import { DoubleAngleUp } from '@/assets/icons/components/doubleAngleUp'

import s from './Char.module.scss'
import { LowerOrUpper } from '@/model/userChar/userChar-reducer'

type Props = {
  char: string
  isUpper: LowerOrUpper
}

export const Char = ({ char, isUpper }: Props) => {
  return (
    <div className={s.Char}>
      {char}
      <div className={s.isUpper}>
        {isUpper === 'Upper' && <DoubleAngleUp color={'green'} size={54} />}
        {isUpper === 'Lower' && <DoubleAngleDown color={'red'} size={34} />}
        {/*{isUpper === 'None'}*/}
      </div>
    </div>
  )
}
