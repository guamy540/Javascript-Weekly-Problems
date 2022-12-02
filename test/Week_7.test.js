var expect = require("chai").expect;

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
});

describe('Week 7, motivationalMessageAboutTeamWork', () => {
    it('should display an error if given a number', () => {
        expect(motivationalMessageAboutTeamWork(1)).to.equal('Expected 1 to be a string');
    });
    it('should display an error if given an array', () => {
        expect(motivationalMessageAboutTeamWork(["string", "string"])).to.equal('Expected string,string to be a string');
    });
    it('should display an error if given a boolean', () => {
        expect(motivationalMessageAboutTeamWork(false)).to.equal('Expected false to be a string');
    });
});

describe('Week 7, averageGrades', () => {
    it('should throw an TypeError if given a string', () => {
        expect(() => averageGrades({CS230: 95, CS250: 89, CS133: "91"})).to.throw(TypeError, 'Expected CS133: 91 to be a number');
    });
    it('should throw an TypeError if given a boolean', () => {
        expect(() => averageGrades({CS230: 95, CS250: 89, CS133: false})).to.throw(TypeError, 'Expected CS133: false to be a number');
    });
    it('should throw an RangeError if given a number outside 0 to 100', () => {
        expect(() => averageGrades({CS230: 95, CS250: 89, CS133: -1})).to.throw(RangeError, 'Expected CS133: -1 to be between 0 and 100');
    });
});

describe('Week 7, gradeReport', () => {
    it('display an error if given a string', () => {
        expect(gradeReport(() => {return {CS230: 95, CS250: 89, CS133: "91"}})).to.equal('Expected CS133: 91 to be a number');
    });
    it('display an error if given a boolean', () => {
        expect(gradeReport(() => {return {CS230: 95, CS250: 89, CS133: false}})).to.equal('Expected CS133: false to be a number');
    });
    it('display an error if given a number outside 0 to 100', () => {
        expect(gradeReport(() => {return {CS230: 95, CS250: 89, CS133: -1}})).to.equal('Expected CS133: -1 to be between 0 and 100');
    });
    it('display a random error', () => {
        expect(gradeReport(() => {throw new AssertionError()})).to.satisfy(msg => msg.startsWith('Something went wrong'));
    });
});


const { AssertionError } = require("chai");
const { isThereAnI, motivationalMessageAboutTeamWork, averageGrades, gradeReport } = require('../src/Week_7.js');