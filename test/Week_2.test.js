var expect = require("chai").expect;

const { problemOne, problemTwo, problemThree, problemFour} = require('../src/Week_2.js');

describe('Week 2, ProblemOne', () => {
    it('should return [1, 5] when given [1, 2, 3, 4, 5]', () => {
        expect(problemOne([1, 2, 3, 4, 5])).to.eql([1, 5]);
    });

    it('should return [-2, 5] when given [5, 4, 3, -2, 1]', () => {
        expect(problemOne([5, 4, 3, -2, 1])).to.eql([-2, 5]);
    });

    it('should return [1, 5] when given [5, 1]', () => {
        expect(problemOne([1, 5])).to.eql([1, 5]);
    });
    it('should return [1, 1] when given [1]', () => {
        expect(problemOne([1])).to.eql([1, 1]);
    });
    it('should return [-1, 111] when given [1, -1, 100, 12, 10, 111]', () => {
        expect(problemOne([1, -1, 100, 12, 10, 111])).to.eql([-1, 111]);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemOne(true)).to.throw(TypeError, 'Expected true to be an array');
    });
});

describe('Week 2, ProblemTwo', () => {
    it('should return [3, 6, 9, 12, 15] when given 3, 17', () => {
        expect(problemTwo(3, 17)).to.eql([3, 6, 9, 12, 15]);
    });

    it('should return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] when given 5, 50', () => {
        expect(problemTwo(5, 50)).to.eql([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });
    it('should throw an error if given a negative number', () => {
        expect(() => problemTwo(-9, 9)).to.throw(Error, 'Impossible numbers.');
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemTwo(true, 9)).to.throw(TypeError, 'Expected true to be a number');
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemTwo(5, true)).to.throw(TypeError, 'Expected true to be a number');
    });
});

describe('Week 2, ProblemThree', () => {
    it('should return [8, 23] when given [1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48]', () => {
        expect(problemThree([1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48])).to.eql([8, 23]);
    });
    it('should return [] if given [], []', () => {
        expect(problemThree([], [])).to.eql([]);
    });
    it('should return [] if given [1, 2, 3], [4, 5, 6]', () => {
        expect(problemThree([1, 2, 3], [4, 5, 6])).to.eql([]);
    });
    it('should return [1, 2, 3] if given [1, 2, 3], [1, 2, 3]', () => {
        expect(problemThree([1, 2, 3], [1, 2, 3])).to.eql([1, 2, 3]);
    }); 
    it('should throw an error if given a boolean', () => {
        expect(() => problemThree(true, [0,0])).to.throw(TypeError, 'Expected true to be an array');
    });
});

describe('Week 2, ProblemFour', () => {
    it('should return 4 when given [1,2,3,4]', () => {
        expect(problemFour([1, 2, 3, 4])).to.equal(4);
    });
    it('should return 0 when given []', () => {
        expect(problemFour([])).to.equal(0);
    });
    it('should return 5 when given [1, [2,[3,4],5]]', () => {
        expect(problemFour([1, [2, [3, 4], 5]])).to.equal(5);
    });
    it('should return 6 when given [[1,2],[3,4], [5, 6]]', () => {
        expect(problemFour([[1, 2], [3, 4], [5, 6]])).to.equal(6);
    });
    it('should throw an error if given a boolean', () => {
        expect(() => problemFour(true)).to.throw(TypeError, 'Expected true to be an array');
    });
});