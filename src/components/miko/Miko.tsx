import { useEffect, useMemo, useRef } from 'react'

import { mediaSources } from '@/app/data'

import s from './Miko.module.scss'

type Props = {
  className?: string
  emotion: Emotion
  isVoiceOn?: boolean
}

export type Emotion = 'expectation' | 'happy' | 'inspiration'

export const Miko = ({ className, emotion, isVoiceOn }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const randomSrc = (arr: any) => {
    const random = Math.floor(Math.random() * arr.length)

    return arr[random]
  }

  const randomEmotion: { audioSrc: string; imgSrc: string } = useMemo(() => {
    if (emotion === 'happy') {
      const src = randomSrc(mediaSources.happy)

      return { audioSrc: src.audioSrc, imgSrc: src.imgSrc }
    }

    if (emotion === 'inspiration') {
      const src = randomSrc(mediaSources.inspiration)

      return { audioSrc: src.audioSrc, imgSrc: src.imgSrc }
    }

    if (emotion === 'expectation') {
      const src = randomSrc(mediaSources.expectation)

      return { audioSrc: src.audioSrc, imgSrc: src.imgSrc }
    }
  }, [emotion]) || { audioSrc: '', imgSrc: '' }

  useEffect(() => {
    if (randomEmotion.audioSrc && isVoiceOn) {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }
  }, [randomEmotion.audioSrc, isVoiceOn])

  return (
    <div className={`${s.MikoContainer} ${className}`}>
      <img alt={'happyMiko'} src={randomEmotion.imgSrc} />
      <audio ref={audioRef} src={randomEmotion.audioSrc} />
    </div>
  )
}
