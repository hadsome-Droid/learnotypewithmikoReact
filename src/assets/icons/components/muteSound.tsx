import { IconProps, IconWrapper } from '../../icons/iconWrapper'

export const MuteSound = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 32 32'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g data-name={'Layer 35'} id={'Layer_35'}>
            <path
              d={
                'M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z'
              }
              fill={'currentColor'}
            />
            <path
              d={
                'M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z'
              }
              fill={'currentColor'}
            />
            <rect
              fill={'currentColor'}
              height={'12'}
              transform={'translate(-3.77 22.9) rotate(-45)'}
              width={'2'}
              x={'24.76'}
              y={'10'}
            />
            <rect
              fill={'currentColor'}
              height={'2'}
              transform={'translate(-3.77 22.9) rotate(-45)'}
              width={'12'}
              x={'19.76'}
              y={'15'}
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
