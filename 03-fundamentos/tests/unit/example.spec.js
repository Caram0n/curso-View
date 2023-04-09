
describe('Example Component',() =>{
  test('debe ser mayor a 10', () => {
    // Arreglar
    let value = 10;

    // Estímulo
    value = value + 1;

    // Observar el resultado
    expect(value).toBeGreaterThan(10);
  })

})