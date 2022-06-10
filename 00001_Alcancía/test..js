  it("Si el pozo tiene 0 pesos está vacío", function() {
    pozo = 0
    assert(pozoVacio())
  })
  
  it("Si el pozo tiene 200 pesos no está vacío", function() {
    pozo = 200
    assert(!pozoVacio())
  })