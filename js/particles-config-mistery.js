particlesJS("particles-js", {
  particles: {
    number: { value: 100 }, // menos partículas para um visual mais sereno
    color: { value: "#6a1b1b" }, // branco = luz divina
    shape: {
      type: "circle", // pode trocar para "star" se quiser
    },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 5,
      random: true
    },
    line_linked: {
      enable: false // sem linhas, mais limpo
    },
    move: {
      enable: true,
      speed: 1.2, // bem lento, meditativo
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false
      }
    }
  },
  retina_detect: true
});
