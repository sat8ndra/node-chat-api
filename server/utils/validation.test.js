const expect = require('expect');

// import isRealString

// isRealString
  //should reject non-string values
  //should reject string with only space
  //should allow string with non-space charactes

var {isRealString} = require('./validation');

  describe('isRealString', () => {
    it('should reject non string values', () => {
      var text = 1234;
      var result = isRealString(text);
      expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
      var text = "    ";
      var result = isRealString(text);
      expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
      var text = "sa12asd as45";
      var result = isRealString(text);
      expect(result).toBe(true);
    });
  });
