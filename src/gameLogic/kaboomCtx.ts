import kaboom from "kaboom";

const k = kaboom({
  width: 1280,
  height: 720,
  letterbox: true,
  global: false,
  debug: true, //set this to false before building executable
});

export default k;
