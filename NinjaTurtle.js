let Turtle = require('./turtle');

class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this.level = 0;
    }

    grow(age) {
        this._age += age;
        this.level += age;
    }

    toString() {
        let result = super.toString();
        if (this.level < 25) {
            result += `\n${this.name.substr(0, 3)} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`
        } else if (this.level >= 25 && this.level <100) {
            result += `\n${this.name.substr(0, 3)} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`
        } else {
            result += `\n${this.name.substr(0, 3)} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`
        }
        return result;
    }
}

module.exports = NinjaTurtle;