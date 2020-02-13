const assert = require('assert')
const Cell = require('../gameOfLife')

describe ('cell', function() {
  it('has a coordinate', function() {
    const cell = Cell()
    assert.equal(cell.coordinate[0], 0)
    assert.equal(cell.coordinate[1], 0)
  })
  it('has a state', function() {
    const cell = Cell()
    assert.equal(cell.isAlive, false)
  })
  it('can change state', function() {
    const cell = Cell
  })
})