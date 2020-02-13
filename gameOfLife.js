const cell = function (alive=false, coordinate=[0,0]) {

  return {
    coordinate: coordinate,
    isAlive: alive,
  }
}

module.exports = cell