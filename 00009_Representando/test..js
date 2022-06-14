  it("Si tenemos a Perla con 5 votos y a Enzo con 2, la variable representante toma como valor 'Perla' ", function() {
    declararRepresentante('Perla', 5, 'Enzo', 2)
    assert.equal(representante, 'Perla')
  })

  it("Si tenemos a Theo con 8 votos y a Pipi con 4, la variable representante toma como valor 'Theo' ", function() {
    declararRepresentante('Theo', 8, 'Pipi', 4)
    assert.equal(representante, 'Theo')
  })
