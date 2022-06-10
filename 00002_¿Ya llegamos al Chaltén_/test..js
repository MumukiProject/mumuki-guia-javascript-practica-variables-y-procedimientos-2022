  it("Si tenemos un pozo de 3000 pesos y hacemos cuantaGenteViajaAlChalten nos retorna 1", function() {
    pozo = 3000
    assert.equal(cuantaGenteViajaAlChalten(), 1)
  })
  
  it("Si tenemos un pozo de 1500 pesos y hacemos cuantaGenteViajaAlChalten nos retorna 0", function() {
    pozo = 1500
    assert.equal(cuantaGenteViajaAlChalten(), 0)
  })
  
  it("Si tenemos un pozo de 6000 pesos y hacemos cuantaGenteViajaAlChalten nos retorna 2", function() {
    pozo = 6000
    assert.equal(cuantaGenteViajaAlChalten(), 2)
  })
  
  it("Si tenemos un pozo de 6500 pesos y hacemos cuantaGenteViajaAlChalten nos retorna 2", function() {
    pozo = 6500
    assert.equal(cuantaGenteViajaAlChalten(), 2)
  })