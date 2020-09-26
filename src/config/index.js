module.exports = {
  autor: "roger luje.",
  github: "https://github.com/kibalion2427",
  email: "roger1994a@gmail.com",
  cv: "https://roger-portfolio.s3.us-east-2.amazonaws.com/CV.pdf",
  navHeight: 100,
  sections: [
    { id: 1, name: "about", url: "about" },
    { id: 2, name: "works", url: "works" },
    { id: 3, name: "projects", url: "projects" },
    { id: 4, name: "contact", url: "contact" },
  ],
  navLinks: [
    {
      name: "About",
      url: "/",
    },
    {
      name: "Experience",
      url: "/servicios",
    },
    {
      name: "Projects",
      url: "/cotizador",
    },
    {
      name: "Contact",
      url: "/trabajo",
    },
  ],
  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
