const cubeChecker = (volume, side) => (volume === 0) ? false : (side ** 3) === Math.abs(volume)