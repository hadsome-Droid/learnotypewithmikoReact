import { IParticlesOptions, RecursivePartial } from 'tsparticles-engine'

// типизация просто бомба! :)
export const showSnowFlake: RecursivePartial<IParticlesOptions> = {
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 0.3,
        opacity: 1,
        size: 4,
        speed: 3,
      },
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#d99000',
    },
    line_linked: {
      color: '#ffffff',
      distance: 500,
      enable: true,
      opacity: 0.4,
      width: 3,
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      bounce: false,
      direction: 'bottom',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        area: 800,
        enable: true,
      },
      value: 120,
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: '#ffffff',
        width: 0,
      },
      type: 'circle',
    },
    size: {
      anim: {
        enable: false,
        size_min: 0.1,
        speed: 20,
        sync: false,
      },
      random: true,
      value: 4,
    },
  },
}
