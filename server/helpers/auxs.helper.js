const auxs =
  {
    getRandomInt: (min, max) =>
      Math.floor(
        Math.random() *
        (Math.floor(max) - Math.ceil(min))
      ) + Math.ceil(min)
  };

export { auxs as default };
