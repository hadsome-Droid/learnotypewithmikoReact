import { IconProps, IconWrapper } from '../../icons/iconWrapper'

export const MusicPlay = (allProps: IconProps) => {
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
          <g data-name={'17. Play'} id={'_17._Play'}>
            <path
              d={
                'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z'
              }
              fill={'currentColor'}
            />
            <path
              d={
                'M16.173,10.3l-5.113-3.2A2,2,0,0,0,8,8.8V15.2a2,2,0,0,0,3.06,1.7l5.113-3.2a2,2,0,0,0,0-3.392ZM10,15.2V8.8L15.113,12Z'
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
