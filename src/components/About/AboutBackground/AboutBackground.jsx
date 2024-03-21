import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import './styles.css';

const AboutBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ( {
        fpsLimit: 120,
        interactivity: {
            options:{fullscreen:{enable:true,zIndex:0}},
            style: {position: "absolute"},
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            //color of stars 
            color: {
                value: "#8c8191",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                //move
                speed: 0.5,
                straight: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.2,
                // animation
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 1, max: 50 },
                // animation
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.1,
                    sync: false,
                  },
            },

            modes: {
                push: {
                quantity: 4,
                },
                remove: {
                quantity: 2,
                },
            },
        },
        detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default AboutBackground;