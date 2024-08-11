import { useEffect, useRef, useState } from 'react'

import backgroundMusic from './assets/audio/backgroundMusic/RavingEnergy.mp3'
import { Button } from './components/button/button'
import { Router } from './router/Rouret'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = 0.1
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const handleUserInteraction = () => {
    console.log('music on')
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <div style={{ backgroundColor: '#0f0e17', height: '100vh', position: 'relative' }}>
        <Button onClick={handleUserInteraction} style={{ position: 'absolute', zIndex: '4' }}>
          Music <audio loop ref={audioRef} src={backgroundMusic} />
        </Button>
        {/*<Game />*/}
        <Router />
      </div>
    </>
  )
}

export default App
