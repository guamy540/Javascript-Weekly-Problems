var expect = require("chai").expect;

const { Vector, Vector2, createVector, MovingVector} = require('../src/Week_6.js');

describe('Week 6, Vector', () => {
    it('should return a Vector object when given 1, 2', () => {
        expect(new Vector(1, 2)).to.be.an.instanceOf(Vector);
    });
    it('Vector.x should return 1 when a Vector object is given 1, 2', () => {
            expect(new Vector(1, 2).x).to.equal(1);
        }
    );
    it('Vector.y should return 2 when a Vector object is given 1, 2', () => {
        expect(new Vector(1, 2).y).to.equal(2);
    });
    it('Vector.length should return 2 when a Vector object is given Math.sqrt(2), Math.sqrt(2)', () => {
        expect(new Vector(Math.sqrt(2), Math.sqrt(2)).length).to.equal(2);
    });
    it('Vector.add() should return Vector(3, 5) when given Vector(1, 2) and Vector(2, 3)', () => {
        expect(new Vector(1, 2).add(new Vector(2, 3))).to.eql(new Vector(3, 5));
    });
    it('Vector.subtract() should return Vector(-1, -1) when given Vector(1, 2) and Vector(2, 3)', () => {
        expect(new Vector(1, 2).subtract(new Vector(2, 3))).to.eql(new Vector(-1, -1));
    });  
});

describe('Week 6, Vector2', () => {
    it('should return a Vector object when given 1, 2', () => {
        expect(new Vector2(1, 2)).to.be.an.instanceOf(Vector2);
    });
    it('Vector2.x should return 1 when a Vector2 object is given 1, 2', () => {
            expect(new Vector2(1, 2).x).to.equal(1);
        }
    );
    it('Vector2.y should return 2 when a Vector2 object is given 1, 2', () => {
        expect(new Vector2(1, 2).y).to.equal(2);
    });
    it('Vector2.length should return 2 when a Vector2 object is given Math.sqrt(2), Math.sqrt(2)', () => {
        expect(new Vector2(Math.sqrt(2), Math.sqrt(2)).length).to.equal(2);
    });
    it('Vector2.add().x should return 3 when given Vector2(1, 2) and Vector2(2, 3)', () => {
        expect(new Vector2(1, 2).add(new Vector2(2, 3)).x).to.eql(3);
    });
    it('Vector2.subtract() should return Vector(-1, -1) when given Vector2(1, 2) and Vector2(2, 3)', () => {
        expect(new Vector(1, 2).subtract(new Vector2(2, 3)).x).to.eql(-1);
    });  
});

describe('Week 6, CreateVector', () => {
    it('should return a Object when given 1, 2', () => {
        expect(createVector(1, 2)).to.be.an.instanceOf(Object);
    });
    it('createVector().x should return 1 when a createVector( object is given 1, 2', () => {
        expect(createVector(1, 2).x).to.equal(1);
    });
    it('createVector().y should return 2 when a createVector( object is given 1, 2', () => {
        expect(createVector(1, 2).y).to.equal(2);
    });
    it('createVector().length should return 2 when a createVector( object is given Math.sqrt(2), Math.sqrt(2)', () => {
        expect(createVector(Math.sqrt(2), Math.sqrt(2)).length).to.equal(2);
    });
    it('createVector().add() should return createVector(3, 5) when given createVector(1, 2) and createVector(2, 3)', () => {
        expect(createVector(1, 2).add(createVector(2, 3)).x).to.eql(3);
    });
    it('createVector()2.subtract() should return createVector(-1, -1) when given createVector(1, 2) and createVector(2, 3)', () => {
        expect(createVector(1, 2).subtract(createVector(2, 3)).x).to.eql(-1);
    });  
});

describe('Week 6, MovingVector', () => {
    it('should return a MovingVector object when given 1, 2', () => {
        expect(new MovingVector(1, 2, 90, 2)).to.be.an.instanceOf(MovingVector);
    });
    it('Moving Object should inherit the MovingVector object', () => {
        expect(new MovingVector(1, 2, 90, 2)).to.be.an.instanceOf(Vector);
    });
    it('MovingVector.x should return 1 when a MovingVector object is given 1, 2', () => {
        expect(new MovingVector(1, 2, 90, 2).x).to.equal(1);
    });
    it('MovingVector.y should return 2 when a MovingVector object is given 1, 2', () => {
        expect(new MovingVector(1, 2, 90, 2).y).to.equal(2);
    });
    it('MovingVector.length should return 2 when a MovingVector object is given Math.sqrt(2), Math.sqrt(2)', () => {
        expect(new MovingVector(Math.sqrt(2), Math.sqrt(2), 90, 2).length).to.equal(2);
    });
    it('MovingVector.direction should return 90 when a MovingVector object is given 1, 2, 90, 2', () => {
        expect(new MovingVector(1, 2, 90, 2).direction).to.equal(90);
    });
    it('MovingVector.speed should return 2 when a MovingVector object is given 1, 2, 90, 2', () => {
        expect(new MovingVector(1, 2, 90, 2).speed).to.equal(2);
    });
    it('MovingVector.add() should return Vector(3, 5) when given MovingVector(1, 2) and Vector(2, 3)', () => {
        expect(new MovingVector(1, 2, 90, 2).add(new Vector(2, 3))).to.eql(new Vector(3, 5));
    });
    it('MovingVector.subtract() should return Vector(-1, -1) when given MovingVector(1, 2) and Vector(2, 3)', () => {
        expect(new MovingVector(1, 2, 90, 2).subtract(new Vector(2, 3))).to.eql(new Vector(-1, -1));
    });  
    it('MovingVector.x should be 1 when MovingVector.move() is given 2 and a MovingVector(1, 2, 90, 2) ', () => {
        expect(new MovingVector(1, 2, 90, 2).move(2).x).to.be.closeTo(1, 0.001);
    });
    it('MovingVector.y should be 6 when MovingVector.move() is given 2 and a MovingVector(1, 2, 90, 2) ', () => {
        expect(new MovingVector(1, 2, 90, 2).move(2).y).to.be.closeTo(6, 0.001);
    });
    it('MovingVector.x should be -1 when MovingVector.move() is given 1 and a MovingVector(1, 2, 180, 2) ', () => {
        expect(new MovingVector(1, 2, 180, 2).move(1).x).to.be.closeTo(-1, 0.001);
    });
    it('MovingVector.y should be 2 when MovingVector.move() is given 1 and a MovingVector(1, 2, 180, 2) ', () => {
        expect(new MovingVector(1, 2, 180, 2).move(1).y).to.be.closeTo(2, 0.001);
    });
    it('MovingVector.x should be 1 when MovingVector.move() is given 1 and a MovingVector(1, 2, 0, 0) ', () => {
        expect(new MovingVector(1, 2, 0, 0).move(1).x).to.be.closeTo(1, 0.001);
    });
    it('MovingVector.y should be 2 when MovingVector.move() is given 1 and a MovingVector(1, 2, 0, 0) ', () => {
        expect(new MovingVector(1, 2, 0, 0).move(1).y).to.be.closeTo(2, 0.001);
    });
    it('MovingVector.x should be 5 when MovingVector.move() is given 1 and a MovingVector(1, 2, 45, 2) ', () => {
        expect(new MovingVector(1, 2, 45, 2).move(2).x).to.be.closeTo(3.828, 0.001);
    });
    it('MovingVector.y should be 6 when MovingVector.move() is given 1 and a MovingVector(1, 2, 45, 2) ', () => {
        expect(new MovingVector(1, 2, 45, 2).move(2).y).to.be.closeTo(4.828, 0.001);
    });
});
