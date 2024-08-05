import { useEffect, useRef, useState } from 'react'

import backgroundMusic from './assets/audio/backgroundMusic/RavingEnergy.mp3'
import { Game } from './game/Game'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = 0.1
      audioRef.current.play()
    }
  }, [isPlaying])

  const handleUserInteraction = () => {
    setIsPlaying(true)
  }

  return (
    <>
      <button onClick={handleUserInteraction}>
        Music
        <audio loop ref={audioRef} src={backgroundMusic} />
      </button>
      <div style={{ backgroundColor: '#0f0e17', height: '100vh' }}>
        <Game />
      </div>
    </>
  )
}

export default App
