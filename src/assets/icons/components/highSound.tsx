import { IconProps, IconWrapper } from '../../icons/iconWrapper'

export const HighSound = (allProps: IconProps) => {
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
          <g data-name={'Layer 34'} id={'Layer_34'}>
            <path
              className={'cls-1'}
              d={
                'M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z'
              }
              fill={'currentColor'}
            />
            <path
              className={'cls-1'}
              d={
                'M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z'
              }
              fill={'currentColor'}
            />
            <path
              className={'cls-1'}
              d={'M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z'}
              fill={'currentColor'}
            />
            <path
              className={'cls-1'}
              d={
                'M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z'
              }
              fill={'currentColor'}
            />
            <path
              className={'cls-1'}
              d={
                'M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z'
              }
              fill={'currentColor'}
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
