var expect = require("chai").expect;

const { problemOne, problemTwo, problemThree, problemFour } = require('../src/Week_4.js');

describe('Week 4, ProblemOne', () => {
    it('should return [1, 5] when given [1, 2, 3, 4, 5]', () => {
        expect(problemOne([1, 2, 3, 4, 5])).to.eql([1, 5]);
    });

    it('should return [-2, 5] when given [5, 4, 3, -2, 1]', () => {
        expect(problemOne([5, 4, 3, -2, 1])).to.eql([-2, 5]);
    });

    it('should return [-1, 111] when given [-1, 10, 1, 11, 111, 0, 100]', () => {
        expect(problemOne([-1, 10, 1, 11, 111, 0, 100])).to.eql([-1, 111]);
    });

    it('should return [1, 5] when given [5, 1]', () => {
        expect(problemOne([1, 5])).to.eql([1, 5]);
    });
    it('should return [1, 1] when given [1]', () => {
        expect(problemOne([1])).to.eql([1, 1]);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemOne(true)).to.throw(TypeError, 'Expected true to be an array');
    });
});

describe('Week 4, problemTwo', () => {
    it(`should return 91.7 when given CS230: 95,CS250: 89,CS133: 91}`, () => {
        expect(problemTwo({ CS230: 95, CS250: 89, CS133: 91 })).to.eql(91.7);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: ''}`, () => {
        expect(problemTwo({ CS230: 95, CS250: 89, CS133: '' })).to.eql(92);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: -1}`, () => {
        expect(problemTwo({ CS230: 95, CS250: 89, CS133: -1 })).to.eql(92);
    });
    it(`should return 85 when given {'CalcI': 95, 'CalcII': 89, 'CalcIII': 71}`, () => {
        expect(problemTwo({ 'CalcI': 95, 'CalcII': 89, 'CalcIII': 71 })).to.eql(85);
    });
    it(`should return undefined when given {CS230: '', CS250: '', CS133: ''}`, () => {
        expect(problemTwo({ CS230: '', CS250: '', CS133: '' })).to.eql(undefined);
    });
    it(`should return undefined when given {}`, () => {
        expect(problemTwo({})).to.eql(undefined);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemTwo(true)).to.throw(TypeError, 'Expected true to be an object');
    });
});

describe('Week 4, ProblemThree', () => {
    it('should return [2, 3, 4] when given [-1, 2, 3, 5, 4]', () => {
        expect(problemThree([-1, 2, 3, 5, 4])).to.eql([2, 3, 4]);
    });
    it('should return [0.0145, 4.01] when given [ -0.11, -1.3, -4.256, -1.104, -2.102, 0.0145, 4.01]', () => {
        expect(problemThree([-0.11, -1.3, -4.256, -1.104, -2.102, 0.0145, 4.01])).to.eql([0.0145, 4.01]);
    });
    it('should return [] when given [-0.11, -1.3, -4.256, -1.104, -2.102, -0.0145, -4.01]', () => {
        expect(problemThree([-0.11, -1.3, -4.256, -1.104, -2.102, -0.0145, -4.01])).to.eql([]);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemThree(true)).to.throw(TypeError, 'Expected true to be an array');
    });
});

describe('Week 4, ProblemFour', () => {
    it(`should return { 
        short: ["The fox", "The dog"], 
        long: [ "The quick brown fox jumps over the lazy dog", 
                "The lazy dog",
                "The quick brown fox"]}`, () => {
        expect(problemFour([
                "The quick brown fox jumps over the lazy dog",
                "The fox",
                "The dog",
                "The lazy dog",
                "The quick brown fox"
        ])).to.eql({
            short: ["The fox", "The dog"],
            long: ["The quick brown fox jumps over the lazy dog",
                   "The lazy dog",
                   "The quick brown fox"]});
    });
    it(`should return { 
        short: ["The fox", "The dog"], 
        long: []}`, () => {
        expect(problemFour([
                "The fox",
                "The dog"
        ])).to.eql({
            short: ["The fox", "The dog"],
            long: []});
    });
    it(`should return { 
        short: [], 
        long: [ "The quick brown fox jumps over the lazy dog", 
                "The lazy dog",
                "The quick brown fox"]}`, () => {
        expect(problemFour([
                "The quick brown fox jumps over the lazy dog",
                "The lazy dog",
                "The quick brown fox"
        ])).to.eql({
            short: [],
            long: ["The quick brown fox jumps over the lazy dog",
                   "The lazy dog",
                   "The quick brown fox"]});
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemFour(true)).to.throw(TypeError, 'Expected true to be an array');
    });
});

