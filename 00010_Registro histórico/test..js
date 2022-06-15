  it("Si registramos como representante del año 2021 a Sol se agrega a la variable global representantesPorAnio", function() {
    representantesPorAnio = ''
    registrarRepresentanteDelAnio("Sol", 2021)
    assert.equal(representantesPorAnio, "Sol 2021")
  })
  
it("Si registramos como representante del año 2021 a Sol y a Perla en 2022 se agregan a la variable global representantesPorAnio", function() {
    representantesPorAnio = ''
    registrarRepresentanteDelAnio("Sol", 2021)
    registrarRepresentanteDelAnio("Perla", 2022)
    assert.equal(representantesPorAnio, "Sol 2021, Perla 2022")
  })