
  
  it("Si tenemos 100000 en el pozo y aplicamos el IVG tres veces el pozo queda en 98500", function() {
    pozo = 100000
    aplicarIvg()
    aplicarIvg()
    aplicarIvg()
    assert.equal(pozo, 98500)
  })
  
  it("Si tenemos 100000 en el pozo y aplicamos el IVG cuatro veces el pozo queda en 98500", function() {
    pozo = 100000
    aplicarIvg()
    aplicarIvg()
    aplicarIvg()
    aplicarIvg()
    assert.equal(pozo, 98500)
  })
  