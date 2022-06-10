  it("Si el pozo tiene 3000 pesos y alquien se da de baja pasa a tener 2500 pesos", function() {
    pozo = 3000
    darseDeBaja()
    assert(pozo, 2500)
  })
  
  it("Si el pozo tiene 500 pesos y alquien se da de baja pasa a tener 0 pesos", function() {
    pozo = 500
    darseDeBaja()
    assert(pozo, 0)
  })
  
  it("Si el pozo tiene 2000 pesos y alquien se da de baja pasa a tener 1500 pesos", function() {
    pozo = 2000
    darseDeBaja()
    assert(pozo, 1500)
  })