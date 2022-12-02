var expect = require("chai").expect;

const { problemOne, problemTwo, problemThree} = require('../src/Week_3.js');

describe('Week 3, ProblemOne', () => {
    it(`should return 91.7 when given CS230: 95,CS250: 89,CS133: 91}`, () => {
        expect(problemOne({CS230: 95, CS250: 89, CS133: 91})).to.eql(91.7);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: ''}`, () => {
        expect(problemOne({CS230: 95, CS250: 89, CS133: ''})).to.eql(92);
    });
    it(`should return 92 when given {CS230: 95, CS250: 89, CS133: -1}`, () => {
        expect(problemOne({CS230: 95, CS250: 89, CS133: -1})).to.eql(92);
    });
    it(`should return 85 when given {'CalcI': 95, 'CalcII': 89, 'CalcIII': 71}`, () => {
        expect(problemOne({'CalcI': 95, 'CalcII': 89, 'CalcIII': 71})).to.eql(85);
    });
    it(`should return undefined when given {CS230: '', CS250: '', CS133: ''}`, () => {
        expect(problemOne({CS230: '', CS250: '', CS133: ''})).to.eql(undefined);
    });
    it(`should return undefined when given {}`, () => {
        expect(problemOne({})).to.eql(undefined);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemOne(true)).to.throw(TypeError, 'Expected true to be an object');
    });
});

describe('Week 3, ProblemTwo', () => {
    it(`should return [['a', 1], ['b', 2], ['c', 3]] when given {a: 1, b: 2, c: 3}`, () => {    
        expect(problemTwo({a: 1, b: 2, c: 3})).to.eql([['a', 1], ['b', 2], ['c', 3]]);
    });

    it(`should return [['a', 1], ['b', 2], ['c', 3]] when given {'a': 1, 'b': 2, 'c': 3}`, () => {
        expect(problemTwo({'a': 1, 'b': 2, 'c': 3})).to.eql([['a', 1], ['b', 2], ['c', 3]]);
    });

    it('should throw an error if given a boolean', () => {
        expect(() => problemTwo(true)).to.throw(TypeError, 'Expected true to be an object');
    });
});


describe('Week 3, ProblemThree', () => {
    it('should return true when given {} and {}', () => {
        expect(problemThree({}, {})).to.eql(true);
    });

    it('should return true when given {a: 1} and {a: 1}', () => {
        expect(problemThree({a: 1}, {a: 1})).to.eql(true);
    });

    it('should return true when given {a: 1, b: 2} and {a: 1, b: 2}', () => {
        expect(problemThree({a: 1, b: 2}, {a: 1, b: 2})).to.eql(true);
    });

    it(`should return true when given {a: 1, b: 2, c: 3} and {'a': 1, 'b': 2, 'c': 3}`, () => {
        expect(problemThree({a: 1, b: 2, c: 3}, {'a': 1, 'b': 2, 'c': 3})).to.eql(true);
    });

    it(`should return false when given {a: 1, b: 2, c: 3} and {a: 1, b: 2}`, () => {
        expect(problemThree({a: 1, b: 2, c: 3}, {a: 1, b: 2})).to.eql(false);
    });

    it(`should return true when given {a: 1, b: {c: 3, d: 4}} and {a: 1, b: {c: 3, d: 4}}`, () => {
        expect(problemThree({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 4}})).to.eql(true);
    });

    it(`should return false when given {a: 1, b: {c: 3, d: 4}} and {a: 1, b: {c: 3, d: 5}}`, () => {
        expect(problemThree({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 5}})).to.eql(false);
    });

    it(`should return true when given {a: 1, b: {c: 3, d: {e: 5}}}} and {a: 1, b: {c: 3, d: {e: 5}}}}`, () => {
        expect(problemThree({a: 1, b: {c: 3, d: {e: 5}}}, {a: 1, b: {c: 3, d: {e: 5}}})).to.eql(true);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemThree(true)).to.throw(TypeError, 'Expected true to be an object');
    });
});