import { IconProps, IconWrapper } from '@/assets/icons/iconWrapper'

export const MusicStop = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g data-name={'18. Pause'} id={'_18._Pause'}>
            <path
              d={
                'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z'
              }
              fill={'currentColor'}
            />
            <path d={'M9,8A1,1,0,0,0,8,9v6a1,1,0,0,0,2,0V9A1,1,0,0,0,9,8Z'} fill={'currentColor'} />
            <path
              d={'M15,8a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V9A1,1,0,0,0,15,8Z'}
              fill={'currentColor'}
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
