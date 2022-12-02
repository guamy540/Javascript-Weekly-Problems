/**
 * Remember in Javascript classes are just functions. 
 * 
 * These might be useful:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#no_separate_this
 * https://www.patterns.dev/posts/factory-pattern/
 * https://www.patterns.dev/posts/prototype-pattern/
 * https://www.javascripttutorial.net/es6/object-literal-extensions/
 * 
 */

/*
 * From Chapter 6 of Eloquent JavaScript:
 *
 * Write a class  using a class declaration that represents a vector in two-dimensional space.
 * It takes x and y parameters (numbers), which it should save to properties of the same name.
 * 
 * Give the Vec prototype two methods, add and subtract, that take another vector as a parameter and
 * return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
 * 
 * Add a getter property length to the prototype that computes the length of the vector—that is, 
 * the distance of the point (x, y) from the origin (0, 0).
 * 
 */

//https://stackoverflow.com/questions/65434867/add-2-vectors-in-javascript-vanilla resource used to help make these methods
class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(otherVector){
        return new Vector(this.x + otherVector.x, this.y + otherVector.y)
    }

    subtract(otherVector){
        return new Vector(this.x - otherVector.x, this.y - otherVector.y)
    }

    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

/*
 * Rewrite the same Vec class as Vec 2 using an instantiable function 
*/

function Vector2(x, y){
    this.x = x;
    this.y = y;
    this.length = Math.sqrt(this.x * this.x + this.y * this.y)
}
Vector2.prototype.add = function(otherVector){
    return new Vector(this.x + otherVector.x, this.y + otherVector.y)
}

Vector2.prototype.subtract = function(otherVector){
    return new Vector(this.x - otherVector.x, this.y - otherVector.y)
}

/*
 * Rewrite the same Vec class using a factory function
 *
 * This may be helpful to you when you are trying to work through some of these problmes.

*/ 

const createVector = (x, y) => {
    return{
        x,
        y,
        length: Math.sqrt(x * x + y * y),
        add(otherVector){
            return new Vector(x + otherVector.x, y + otherVector.y)
        },
        subtract(otherVector){
            return new Vector(x - otherVector.x, y - otherVector.y)
        },
    };
}

/*
 * Create a new class called "Moving Vector" that inherits from the Vec class. 
 * Moving Vectors also have a direction property that is a number between 0 and 360.
 * Moving Vectors also have a speed property that is a number between 0 and 100. It means the number of
 * length the vector moves in one second.
 * 
 * Moving Vectors have a method called move that takes a number of seconds as a parameter.
 * The move methd should update the x and y properties of the vector based on the direction and speed.
 * 
*/

class MovingVector extends Vector{
    constructor(x, y, direction, speed){
        super(x, y)  //inherit properties of Vector class
        this.direction = direction;
        this.speed = speed;
    }

    move(numberOfSeconds){
        /*to find the distance moved between points, we multiply the distance (speed*number of seconds)
          by the cos(radian) for x and sin(radian) for y. 
          To get the radian, we take the degree(this.direction) and multiply it by pi/180*/
        this.x = this.x + this.speed*numberOfSeconds*Math.cos(this.direction*Math.PI/180),
        this.y = this.y + this.speed*numberOfSeconds*Math.sin(this.direction*Math.PI/180)
        return this
    }
}

module.exports = { Vector, Vector2, createVector, MovingVector};