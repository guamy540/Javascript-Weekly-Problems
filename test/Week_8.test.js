var expect = require("chai").expect;
const { AssertionError } = require("chai");
const { isThereAnI, countLetterR, findSmallestBiggest, convertNumberToString, findCommonElements } = require('../src/Week_8.js');

describe('Week 7, isThereAnI', () => {
    it('should throw an error if given a number', () => {
        expect(() => isThereAnI(1)).to.throw(TypeError, 'Expected 1 to be a string');
    });
    it('should throw an error if given an array', () => {
        expect(() => isThereAnI(["string", "string"])).to.throw(TypeError, 'Expected string,string to be a string');
    });
    it('should throw an error if given a boolean', () => {
        expect(() => isThereAnI(false)).to.throw(TypeError, 'Expected false to be a string');
    });
    //My tests below
    it('should expect true if given the string "main"', () => {
        expect(() => isThereAnI('main').to.equal(true))
    });
    it('should return false if given the string "fox"', () => {
        expect(() => isThereAnI('fox').to.equal(false))
    })
    it('should throw an error if given an object with a key value pair', () => {
        expect(() => isThereAnI({x: 1})).to.throw(TypeError, 'Expected [object Object] to be a string');
    })
});

describe('Week 1, problemOne', () => {
    it("should return 0 when given an empty string", () => {
        expect(countLetterR("")).to.equal(0);
    });

    it('should return 0 when there are no r\'s in the string', () => {
        expect(countLetterR('Hello All')).to.equal(0);
    });

    it("should return 1 when given a string with one r", () => {
        expect(countLetterR("Sister")).to.equal(1);
    });
    
    it("should return 2 when given a string with an upper and lowercase r", () => {
        expect(countLetterR("Roger Rabbit")).to.equal(3);
    });
    //My tests below
    it("should return 5 when given the string 'RRrr selfR'", () => {
        expect(countLetterR('RRrr selfR')).to.equal(5);
    });
    it("should return 10 when given the string 'RrabcrRr ojkRrR rr'", () => {
        expect(countLetterR('RrabcrRr ojkRrR rr')).to.equal(10);
    });
    it('should throw an error if given a number', () => {
        expect(() => countLetterR(1)).to.throw(TypeError, 'Expected 1 to be a string');
    });
});

describe('Week 2, problemOne', () => {
    it('should return [1, 5] when given [1, 2, 3, 4, 5]', () => {
        expect(findSmallestBiggest([1, 2, 3, 4, 5])).to.eql([1, 5]);
    });

    it('should return [-2, 5] when given [5, 4, 3, -2, 1]', () => {
        expect(findSmallestBiggest([5, 4, 3, -2, 1])).to.eql([-2, 5]);
    });

    it('should return [1, 5] when given [5, 1]', () => {
        expect(findSmallestBiggest([1, 5])).to.eql([1, 5]);
    });
    it('should return [1, 1] when given [1]', () => {
        expect(findSmallestBiggest([1])).to.eql([1, 1]);
    });
    it('should return [1, 1] when given [1]', () => {
        expect(findSmallestBiggest([1])).to.eql([1, 1]);
    });
    //My tests below
    it('should return [-100, 111] when given [-11, 1, 111, 100, -100]', () => {
        expect(findSmallestBiggest([-11, 1, 111, 100, -100])).to.eql([-100, 111]);
    });
    it('should return [-100, -100] when given -100, -100, -100, -100]', () => {
        expect(findSmallestBiggest([-100, -100, -100, -100])).to.eql([-100, -100]);
    });
    it('should throw an error if given an array that is not all numbers', () => {
        expect(() => findSmallestBiggest([-1, "word", 100]).to.throw(TypeError, "Expected word to be a number"))
    })
});

describe("Week 1, problemTwo", () => {
    it("should return 0 when given 0", () => {
        expect(convertNumberToString(0)).to.equal("0");
    });

    it("should return 1 when given 1", () => {
        expect(convertNumberToString(1)).to.equal("1");
    });

    it("should return 1,000 when given 1000", () => {
        expect(convertNumberToString(1000)).to.equal("1,000");
    });

    it("should return 1,000,000 when given 1000000", () => {
        expect(convertNumberToString(1000000)).to.equal("1,000,000");
    });
    //My tests below
    it("should return -999,999,999 when given -999999999", () => {
        expect(convertNumberToString(-999999999)).to.equal("-999,999,999");
    });
    it("should return 9,000.25 when given 9,000.25", () => {
        expect(convertNumberToString(9000.25)).to.equal("9,000.25");
    });
    it('should throw an error if given a string', () => {
        expect(() => findSmallestBiggest("one").to.throw(TypeError, "Expected one to be a number"))
    })
});


describe('Week 2, problemThree', () => {
    it('should return [8, 23] when given [1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48]', () => {
        expect(findCommonElements([1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48])).to.eql([8, 23]);
    });
    it('should return [] if given [], []', () => {
        expect(findCommonElements([], [])).to.eql([]);
    });
    it('should return [] if given [1, 2, 3], [4, 5, 6]', () => {
        expect(findCommonElements([1, 2, 3], [4, 5, 6])).to.eql([]);
    });
    it('should return [1, 2, 3] if given [1, 2, 3], [1, 2, 3]', () => {
        expect(findCommonElements([1, 2, 3], [1, 2, 3])).to.eql([1, 2, 3]);
    });
    //My tests below
    it('should return [-1, -2, -3] if given [-1, -2, -3], [-1, -2, -3]', () => {
        expect(findCommonElements([-1, -2, -3], [-1, -2, -3])).to.eql([-1, -2, -3]);
    });
    it('should return [] if given [-1, -2, -3], []', () => {
        expect(findCommonElements([-1, -2, -3], [])).to.eql([]);
    });
    it('should throw an error if given a string', () => {
        expect(() => findCommonElements([-1, -2, -3], "negative one").to.throw(TypeError, "Expected negative one to be a number"))
    })
});
