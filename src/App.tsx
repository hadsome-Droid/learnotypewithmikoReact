import { useEffect, useRef, useState } from 'react'

import s from './App.module.scss'

import backgroundMusic from './assets/audio/backgroundMusic/RavingEnergy.mp3'
import { MusicPlay } from './assets/icons/components/musicPlay'
import { MusicStop } from './assets/icons/components/musicStop'
import { Button } from './components/button/button'
import { Router } from './router/Rouret'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = 0.2
      audioRef.current.play()
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handleUserInteraction = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <div className={s.app}>
        <Button
          className={`${s.player} ${s.playMusic} ${isPlaying ? s.stopMusic : ''}`}
          onClick={handleUserInteraction}
        >
          {isPlaying ? <MusicStop size={40} /> : <MusicPlay size={40} />}
          <audio loop ref={audioRef} src={backgroundMusic} />
        </Button>
        {/*<Game />*/}
        <Router />
      </div>
    </>
  )
}

export default App
