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

  describe("Es Bisiesto", () => {
    it("Divisible entre 400 deberia considerarse como ano bisiesto", () => {
      expect(esBisiesto(400)).toEqual(true);
    });
  });

  describe("Es Bisiesto", () => {
    it("Divisible entre 100 y no 400 NO deberia considerarse como ano bisiesto", () => {
      expect(esBisiesto(1700)).toEqual(false);
    });
  });

  describe("Es Bisiesto", () => {
    it("Divisible entre 4 y no 100 deberia considerarse como ano bisiesto", () => {
      expect(esBisiesto(2012)).toEqual(true);
    });
  });

  describe("Es Bisiesto", () => {
    it("No divisible entre 4 NO deberia considerarse como ano bisiesto", () => {
      expect(esBisiesto(2018)).toEqual(false);
    });
  });