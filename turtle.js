class Turtle {
    constructor(name, age, gender) {
        if (new.target === Turtle) {
            throw new TypeError('Static classes cannot be instantiated directly');
        }
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    grow(age) {
        this._age += age;
    }

    toString() {
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}`;
    }
}
module.exports = Turtle;