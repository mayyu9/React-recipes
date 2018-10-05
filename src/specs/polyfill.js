// we need polyfill for the enzyme adapter to work.
// for tha request animation frame.

const requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

global.requestAnimationFrame = requestAnimationFrame;

export default requestAnimationFrame;
