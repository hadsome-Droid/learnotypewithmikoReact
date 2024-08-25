import type { Container, Engine } from 'tsparticles-engine'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'

import { showSnowFlake } from '@/components/particle/ParticleData'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'

type Props = {
  isShowFlake: boolean
}

export const MyParticles = ({ isShowFlake = false }: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine)
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container
  }, [])

  return (
    <Particles
      id={'tsparticles'}
      init={particlesInit}
      loaded={particlesLoaded}
      // options={isShowFlake ? showSnowFlake : hideSnowFlake}
      options={isShowFlake ? showSnowFlake : {}}
    />
  )
}
