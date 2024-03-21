import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import './styles.css'

const MainBackground = () => {
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
                onHover: {
                    enable: true,
                     mode: "repulse",
                },
                resize: true,
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
               value: "#bb9639",
            },
            move: {
                direction: "none",
                enable: true,
                //bounce outside screen
                outModes: {
                    default: "out",
                },
                random: true,
                //move
                speed: 2,
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
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 1, max: 50 },
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

export default MainBackground;