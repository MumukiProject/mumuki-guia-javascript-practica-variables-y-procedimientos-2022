  it("Si tenemos 100000 en el pozo y aplicamos el IVG el pozo queda en 99500", function() {
    pozo = 100000
    aplicarIvg()
    assert.equal(pozo, 99500)
  })
  
  it("Si tenemos 99500 en el pozo y aplicamos el IVG el pozo queda en 99000", function() {
    pozo = 99500
    aplicarIvg()
    assert.equal(pozo, 99000)
  })
  