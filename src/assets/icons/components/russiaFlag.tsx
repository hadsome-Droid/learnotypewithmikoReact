import { IconProps, IconWrapper } from '../../icons/iconWrapper'

export const RussiaFlag = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 36 36'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path d={'M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z'} fill={'#CE2028'}></path>
          <path d={'M0 13h36v10H0z'} fill={'#22408C'}></path>
          <path d={'M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z'} fill={'#EEE'}></path>
        </svg>
      }
      {...restProps}
    />
  )
}
