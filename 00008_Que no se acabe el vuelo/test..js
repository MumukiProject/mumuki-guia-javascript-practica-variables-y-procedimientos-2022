  it("Si tenemos un pozo de 900 pesos y hacemos volverAEmpezar el pozo queda en 0 pesos", function() {
    pozo = 900
    volverAEmpezar()
    assert.equal(pozo, 0)
  })
  
  it("Si tenemos un pozo de 500 pesos y hacemos volverAEmpezar el pozo queda en 0 pesos", function() {
    pozo = 500
    volverAEmpezar()
    assert.equal(pozo, 0)
  })
  
  it("Si tenemos un pozo de 1500 pesos y hacemos volverAEmpezar el pozo no se reinicia", function() {
    pozo = 1500
    volverAEmpezar()
    assert.equal(pozo, 1500)
  })
  
  it("Si tenemos un pozo de 9000 pesos y hacemos volverAEmpezar el pozo no se reinicia", function() {
    pozo = 9000
    volverAEmpezar()
    assert.equal(pozo, 9000)
  })