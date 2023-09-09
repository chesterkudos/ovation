import {
  isBoolean,
  isDefined,
  isEmpty,
  isNumber,
  isObject,
  isObjectEmpty,
} from "./general";

describe("general utils", () => {
  describe("isEmpty", () => {
    it("should return TRUE when value === null", () => {
      const result = isEmpty(null);
      expect(result).toBe(true);
    });

    it("should return TRUE when value === false", () => {
      const result = isEmpty(false);
      expect(result).toBe(true);
    });

    it("should return TRUE when value === ''", () => {
      const result = isEmpty("");
      expect(result).toBe(true);
    });

    it("should return TRUE when value === '   '", () => {
      const result = isEmpty("   ");
      expect(result).toBe(true);
    });

    it("should return TRUE when value === undefined", () => {
      const result = isEmpty(undefined);
      expect(result).toBe(true);
    });

    it("should return TRUE when whitespace characters", () => {
      const result = isEmpty("\n\t");
      expect(result).toBe(true);
    });

    it("should return TRUE when empty array", () => {
      const result = isEmpty([]);
      expect(result).toBe(true);
    });

    it("should return FALSE when not empty", () => {
      const result = isEmpty("toronto star");
      expect(result).toBe(false);
    });

    it("should return FALSE when not empty", () => {
      const result = isEmpty("1");
      expect(result).toBe(false);
    });

    it("should return FALSE when true", () => {
      const result = isEmpty(true);
      expect(result).toBe(false);
    });

    it("should return FALSE when combined string and whitespace characters", () => {
      const result = isEmpty("\n\t Hello");
      expect(result).toBe(false);
    });
  });

  describe("isObjectEmpty", () => {
    it("should return TRUE when value === {}", () => {
      const result = isObjectEmpty({});
      expect(result).toBe(true);
    });

    it("should return FALSE when value === { foo: true }", () => {
      const result = isObjectEmpty({
        foo: true,
      });
      expect(result).toBe(false);
    });
  });

  describe("isDefined", () => {
    it("should return TRUE if defined", () => {
      const result = isDefined("toronto star");
      expect(result).toBe(true);
    });

    it("should return TRUE when empty object", () => {
      const result = isDefined({});
      expect(result).toBe(true);
    });

    it("should return TRUE when true", () => {
      const result = isDefined(true);
      expect(result).toBe(true);
    });

    it("should return TRUE when 0", () => {
      const result = isDefined(0);
      expect(result).toBe(true);
    });

    it("should return TRUE when an arrow [1, 2, 3]", () => {
      const result = isDefined([1, 2, 3]);
      expect(result).toBe(true);
    });

    //////////

    it("should return FALSE when ''", () => {
      const result = isDefined("");
      expect(result).toBe(false);
    });

    it("should return FALSE when '   '", () => {
      const result = isDefined("   ");
      expect(result).toBe(false);
    });

    it("should return FALSE when \n\t", () => {
      const result = isDefined("\n\t");
      expect(result).toBe(false);
    });

    it("should return FALSE when []", () => {
      const result = isDefined([]);
      expect(result).toBe(false);
    });

    it("should return FALSE when null", () => {
      const result = isDefined(null);
      expect(result).toBe(false);
    });

    it("should return FALSE when undefined", () => {
      const result = isDefined(undefined);
      expect(result).toBe(false);
    });
  });

  describe("isBoolean", () => {
    /* for true */

    it("should return TRUE when value === boolean(true)", () => {
      const result = isBoolean(true);
      expect(result).toBe(true);
    });

    it("should return TRUE when value === boolean(false)", () => {
      const result = isBoolean(false);
      expect(result).toBe(true);
    });

    /* for false */

    it("should return FALSE when value === object {val : true}", () => {
      const result = isBoolean({
        val: "true",
      });
      expect(result).toBe(false);
    });

    it("should return FALSE when value === string", () => {
      const result = isBoolean("value");
      expect(result).toBe(false);
    });

    it("should return FALSE when value === empty object {}", () => {
      const result = isBoolean({});
      expect(result).toBe(false);
    });

    it("should return FALSE when value === array []", () => {
      const result = isBoolean([]);
      expect(result).toBe(false);
    });

    it("should return FALSE when value === null", () => {
      const result = isBoolean(null);
      expect(result).toBe(false);
    });

    it("should return FALSE when whitespace characters", () => {
      const result = isBoolean("\n\t");
      expect(result).toBe(false);
    });

    it("should return FALSE when value === undefined", () => {
      const result = isBoolean(undefined);
      expect(result).toBe(false);
    });
  });

  describe("isObject", () => {
    /* for true */

    it("should return TRUE when value === object {val : true}", () => {
      const result = isObject({
        val: "true",
      });
      expect(result).toBe(true);
    });

    it("should return TRUE when value === empty object {}", () => {
      const result = isObject({});
      expect(result).toBe(true);
    });

    /* for false */

    it("should return FALSE when value === string", () => {
      const result = isObject("value");
      expect(result).toBe(false);
    });

    it("should return FALSE when value === number", () => {
      const result = isObject(1234);
      expect(result).toBe(false);
    });

    it("should return FALSE when value === boolean", () => {
      const result = isObject(true);
      expect(result).toBe(false);
    });

    it("should return FALSE when value === null", () => {
      const result = isObject(null);
      expect(result).toBe(false);
    });

    it("should return FALSE when whitespace characters", () => {
      const result = isObject("\n\t");
      expect(result).toBe(false);
    });

    it("should return FALSE when value === undefined", () => {
      const result = isObject(undefined);
      expect(result).toBe(false);
    });
  });

  describe("isNumber", () => {
    /* for true */

    it("should return TRUE when value === number", () => {
      const result = isNumber(44);
      expect(result).toBe(true);
    });

    it("should return TRUE when value === zero", () => {
      const result = isNumber(0);
      expect(result).toBe(true);
    });

    /* for false */

    it("should return FALSE when value === object {val : number}", () => {
      const result = isNumber({
        val: 55,
      });
      expect(result).toBe(false);
    });

    it("should return FALSE when value === string", () => {
      const result = isNumber("55");
      expect(result).toBe(false);
    });

    it("should return FALSE when value === empty object {}", () => {
      const result = isNumber({});
      expect(result).toBe(false);
    });

    it("should return FALSE when value === array []", () => {
      const result = isNumber([]);
      expect(result).toBe(false);
    });

    it("should return FALSE when value === null", () => {
      const result = isNumber(null);
      expect(result).toBe(false);
    });

    it("should return FALSE when whitespace characters", () => {
      const result = isNumber("\n\t");
      expect(result).toBe(false);
    });

    it("should return FALSE when value === undefined", () => {
      const result = isNumber(undefined);
      expect(result).toBe(false);
    });
  });
});
