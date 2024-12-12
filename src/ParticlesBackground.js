import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Используем slim для уменьшения размера пакета

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Инициализируем tsParticles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Загружаем нужные элементы tsParticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Логируем контейнер после загрузки
  };

  const options = useMemo(
    () => ({
      background: {
        image: "url('/path-to-your-globe-image.jpg')", // Путь к изображению глобуса
        size: "cover", // Покрытие всего экрана
        repeat: "no-repeat", // Без повторений
        position: "center", // Центрируем изображение
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push", // Добавление частиц при клике
          },
          onHover: {
            enable: true,
            mode: "repulse", // Частицы отталкиваются от курсора
          },
        },
        modes: {
          push: {
            quantity: 60, // Количество частиц
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Цвет частиц
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Частицы отскакивают от границ экрана
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 90, // Количество частиц
        },
        opacity: {
          value: 0.5, // Прозрачность частиц
        },
        shape: {
          type: "circle", // Формы частиц
        },
        size: {
          value: { min: 1, max: 5 }, // Размер частиц
        },
      },
      detectRetina: true, // Поддержка экранов с высоким разрешением
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} // Передаем конфигурацию
     
      />
    );
  }

  return null; // Пока tsParticles не инициализирован, ничего не рендерим
};

export default ParticlesBackground;
