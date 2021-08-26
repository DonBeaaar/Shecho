const { suma, resta, numberDelay } = require('../src/index');

describe('Testing Index', () => {
  it('Suma debe retornar suma de dos numeros 5 - 6', () => {
    const resultFunction = suma(5, 6);

    expect(resultFunction).toBe(11);
  });

  it('Rest of numbers 4 - 1 ', () => {
    const resultRest = resta(4, 1);

    expect(resultRest).toBe(3);
  });

  it('Number delay ', async () => {
    const resolveNumber = await numberDelay(3);
    expect(resolveNumber).toBe(3);
  });
});
