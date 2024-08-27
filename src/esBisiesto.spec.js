import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como ano bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
});

describe("Es Bisiesto", () => {
    it("El 5 no deberia considerarse como ano bisiesto", () => {
      expect(esBisiesto(5)).toEqual(false);
    });
  });

