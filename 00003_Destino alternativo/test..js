  it("Si tenemos un pozo acumulado de 7500 y viajan dos personas nos retorna como destino Tilcara", function() {
    pozo = 7500
    assert.equal(hastaDondeLlegamos(2), 'Tilcara')
  })
  
  it("Si tenemos un pozo acumulado de 9000 y viajan cinco personas nos retorna Seguí ahorrando", function() {
    pozo = 9000
    assert.equal(hastaDondeLlegamos(5), 'Seguí ahorrando')
  })
  
  it("Si tenemos un pozo acumulado de 7500 y viajan tres personas nos retorna como destino Mendoza", function() {
    pozo = 7500
    assert.equal(hastaDondeLlegamos(3), 'Mendoza')
  })