  it("Si registramos como representante del año 2021 a Sol se agrega a la variable global representantesPorAnio", function() {
    registrarRepresentanteDelAnio("Sol", 2021)
    assert.deepEqual(representantesPorAnio, ["Sol", 2021])
  })