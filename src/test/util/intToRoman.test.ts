import { intToRoman } from "../../util/intToRoman";

describe("intToRoman", () => {
  it("should convert 1 to I", () => {
    expect(intToRoman(1)).toBe("I");
  });

  it("should convert 4 to IV", () => {
    expect(intToRoman(4)).toBe("IV");
  });

  it("should convert 9 to IX", () => {
    expect(intToRoman(9)).toBe("IX");
  });

  it("should convert 58 to LVIII", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });

  it("should convert 1994 to MCMXCIV", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });

  it("should convert 3999 to MMMCMXCIX", () => {
    expect(intToRoman(3999)).toBe("MMMCMXCIX");
  });

  it("should return error for 0", () => {
    expect(intToRoman(0)).toBe(
      "Invalid input: Please enter an integer between 1 and 3999."
    );
  });

  it("should return error for negative numbers", () => {
    expect(intToRoman(-5)).toBe(
      "Invalid input: Please enter an integer between 1 and 3999."
    );
  });

  it("should return error for numbers > 3999", () => {
    expect(intToRoman(4000)).toBe(
      "Invalid input: Please enter an integer between 1 and 3999."
    );
  });

  it("should return error for non-integer numbers", () => {
    expect(intToRoman(3.14)).toBe(
      "Invalid input: Please enter an integer between 1 and 3999."
    );
  });

  it("should return error for non-number input", () => {
    // @ts-expect-error
    expect(intToRoman("a")).toBe(
      "Invalid input: Please enter an integer between 1 and 3999."
    );
  });
});
