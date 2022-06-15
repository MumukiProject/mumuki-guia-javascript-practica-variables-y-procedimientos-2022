  it("Si tenemos un pozo de 1000 pesos el monto del IVG es 0 porque no excede los 15000 pesos", function() {
    pozo = 1000;
    assert.equal(calcularMontoIvg, 0)
  })
  
  it("Si tenemos un pozo de 16000 pesos el monto del IVG es 160", function() {
    pozo = 16000;
    assert.equal(calcularMontoIvg, 160)
  })
  
  it("Si tenemos un pozo de 125000 pesos el monto del IVG es 500", function() {
    pozo = 125000;
    assert.equal(calcularMontoIvg, 500)
  })
  
  it("Si tenemos un pozo de 16000 pesos y aplicamos el IVG el monto del pozo es 15840", function() {
    pozo = 16000;
    aplicarIvg()
    assert.equal(pozo, 15840)
  })
  
  it("Si tenemos un pozo de 1000 pesos y aplicamos el IVG el monto del pozo es 1000", function() {
    pozo = 1000;
    aplicarIvg()
    assert.equal(pozo, 1000)
  })