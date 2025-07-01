// src/components/CodeBackground.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // O loadFull para más efectos

function CodeBackground() {
  const particlesInit = useCallback(async (engine) => {
    // Carga el motor de tsParticles.
    // loadSlim se recomienda para reducir el tamaño del paquete.
    // Puedes usar loadFull para incluir todos los plugins y presets.
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Este callback se ejecuta una vez que las partículas han cargado.
    // Puedes realizar acciones aquí si es necesario.
    console.log("Particles container loaded", container);
  }, []);

  const options = {
    background: {
      color: {
        value: "#f8f8f8", // Color de fondo si no hay una HeroSection detrás. Usamos un gris muy claro.
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false, // Deshabilita clicks si no quieres interacción
          // mode: "push",
        },
        onHover: {
          enable: false, // Deshabilita hover si no quieres interacción
          // mode: "grab",
        },
        resize: true,
      },
      modes: {
        // push: {
        //   quantity: 4,
        // },
        // grab: {
        //   distance: 100,
        //   links: {
        //     opacity: 1,
        //   },
        // },
      },
    },
    particles: {
      color: {
        value: "#6c5ce7", // Color de los "puntos" de código (tu color primario)
      },
      links: {
        color: "#6c5ce7", // Color de las "líneas" de código
        distance: 150,
        enable: true,
        opacity: 0.2, // Que no sean demasiado fuertes
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1, // Velocidad del movimiento
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Cantidad de partículas/puntos
      },
      opacity: {
        value: 0.5, // Opacidad de los puntos
      },
      shape: {
        type: "circle", // Puedes probar "square", "triangle", "polygon", "star"
      },
      size: {
        value: { min: 1, max: 3 }, // Tamaño de los puntos
      },
    },
    detectRetina: true,
  };


  // Puedes ajustar las opciones para un efecto "Matrix" más específico
  // Aquí hay un ejemplo básico que simula un fondo de partículas conectadas
  const matrixOptions = {
    background: {
      color: {
        value: "transparent", // Importante: si tu HeroSection ya tiene un fondo, este debe ser transparente
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#4CAF50", // Color verde típico de Matrix
      },
      links: {
        enable: false, // Sin líneas para un efecto Matrix más puro
      },
      collisions: { enable: false },
      move: {
        direction: "bottom", // Caer desde arriba hacia abajo
        enable: true,
        speed: 3, // Velocidad de caída
        random: true, // Caída aleatoria
        straight: false,
        outModes: {
          default: "out", // Se van por abajo y reaparecen por arriba
        },
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 200, // Muchas partículas
      },
      opacity: {
        value: 0.5,
        random: true, // Opacidad aleatoria para un efecto más natural
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
      },
      shape: {
        type: "character", // Usa caracteres
        character: {
          value: ["0", "1", "0", "1", "0", "1", "0", "1"], // Algunos caracteres de ejemplo
          font: "monospace", // Fuente monoespaciada para caracteres de código
          style: "",
          weight: "400",
        },
      },
      size: {
        value: 8, // Tamaño de los caracteres
        random: true,
      },
    },
    detectRetina: true,
  };


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={matrixOptions} // Usa las opciones de Matrix
      // Puedes ponerle un estilo para que ocupe todo el espacio y esté detrás
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0, // Asegura que esté detrás del contenido de la HeroSection
      }}
    />
  );
}

export default CodeBackground;