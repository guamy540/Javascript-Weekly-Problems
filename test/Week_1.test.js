var expect = require("chai").expect;

const { problemOne, problemTwo, problemThree, problemFour, problemFive} = require('../src/Week_1.js');


describe('Week 1, ProblemOne', () => {
    it("should return 0 when given an empty string", () => {
        expect(problemOne("")).to.equal(0);
    });

    it('should return 0 when there are no r\'s in the string', () => {
        expect(problemOne("Hello All")).to.equal(0);
    });

    it("should return 1 when given a string with one r", () => {
        expect(problemOne("Sister")).to.equal(1);
    });
    
    it("should return 2 when given a string with an upper and lowercase r", () => {
        expect(problemOne("Roger Rabbit")).to.equal(3);
    });
    it('should throw an error if given a number', () => {
        expect(() => problemOne(1)).to.throw(TypeError, 'Expected 1 to be a string');
    });
});

describe("Week 1, problemTwo", () => {
    it("should return 0 when given 0", () => {
        expect(problemTwo(0)).to.equal("0");
    });

    it("should return 1 when given 1", () => {
        expect(problemTwo(1)).to.equal("1");
    });

    it("should return 1,000 when given 1000", () => {
        expect(problemTwo(1000)).to.equal("1,000");
    });

    it("should return 1,000,000 when given 1000000", () => {
        expect(problemTwo(1000000)).to.equal("1,000,000");
    });

    it('should throw an error if given a boolean', () => {
        expect(() => problemTwo(true)).to.throw(TypeError, 'Expected true to be a number');
    });
});

describe("Week 1, problemThree", () => {
    it("should return ' World' when given 'Hello World' and 'Goodbye World'", () => {
        expect(problemThree("Hello World", "Goodbye World")).to.equal(" World");
    });

    it("should return 'Hello World' when given 'Hello World' and 'Hello World'", () => {
        expect(problemThree("Hello World", "Hello World")).to.equal("Hello World");
    });

    it("should return 'tball' when given 'basketball' and 'football'", () => {
        expect(problemThree("basketball", "football")).to.equal("tball");
    });
    it("should return '' when given 'basketball' and ''", () => {
        expect(problemThree("basketball", "")).to.equal("");
    });

    it("should return '' when given 'Hello World' and 'Something Else'", () => {
        expect(problemThree("Hello World", "Something Else")).to.equal("");
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemThree("hello", true)).to.throw(TypeError, 'Expected true to be a string');
    });
});

describe("Week 1, problemFour", () => {
    it("should return true when given 43", () => {
        expect(problemFour(43)).to.equal(true);
    });

    it("should return false when given 27", () => {
        expect(problemFour(27)).to.equal(false);
    });

    it("should return true when given 33", () => {
        expect(problemFour(33)).to.equal(true);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemFour(true)).to.throw(TypeError, 'Expected true to be a number');
    });
});

describe("Week 1, problemFive", () => {
    it("should return 14 when given [0, 0] and [12,2]", () => {
        expect(problemFive([0,0], [12,2])).to.equal(14);
    });
    it("should return 2 when given [0, 0] and [-1,-1]", () => {
        expect(problemFive([0,0], [-1,-1])).to.equal(2);
    });
    it("should return 6 when given [0, 0] and [-6,0]", () => {
        expect(problemFive([0,0], [-6,0])).to.equal(6);
    });
    it("should return 1 when given [0, 0] and [0,-1]", () => {
        expect(problemFive([0,0], [0,-1])).to.equal(1);
    });
    it("should return 0 when given [0, 0] and [0,0]", () => {
        expect(problemFive([0,0], [0,0])).to.equal(0);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemFive(true, [0,0])).to.throw(TypeError, 'Expected true to be an array');
    });
});