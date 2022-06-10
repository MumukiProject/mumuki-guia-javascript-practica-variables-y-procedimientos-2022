  it("Si el pozo cuenta con 500 pesos y le aportamos 1000 el pozo pasa a tener 1500 pesos", function() {
    pozo = 500;
    aportarAlPozo(1000)
    assert.equal(pozo, 1500)
  })
  
  it("Si el pozo cuenta con 0 pesos y le aportamos 800 el pozo pasa a tener 800 pesos", function() {
    pozo = 0;
    aportarAlPozo(800)
    assert.equal(pozo, 800)
  })