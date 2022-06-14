  it("Si tenemos a Perla con 5 votos y a Enzo con 2, la variable representante toma como valor 'Perla' ", function() {
    declararRepresentante('Perla', 5, 'Enzo', 2)
    assert.equal(representante, 'Perla')
  })
