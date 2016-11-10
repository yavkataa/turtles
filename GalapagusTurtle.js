let Turtle = require('./turtle');

class GalapagusTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEatenThisYear = [];
    }

    get thingsEaten() {
        return this._thingsEatenThisYear;
    }

    eat(food) {
        this._thingsEatenThisYear.push(food);
    }

    grow(age) {
        super.grow(age);
        this._thingsEatenThisYear = [];
    }

    toString() {
        return super.toString() + `\nThings, eaten this year: ${this._thingsEatenThisYear.join(', ')}`;
    }
}

module.exports = GalapagusTurtle;