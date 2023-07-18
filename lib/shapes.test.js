const circle = require("./circle");
const square = require('./square');
const triangle = require('./triangle');
const shapes = require('./shapes');

describe('Shapes', () => {
    describe('Color of triangle',() => {
       it('should compare the logo color of two triangle logos', () => {
        const shape = new triangle();
        shape.setLogoColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
       })
    })
})

describe('Shapes', () => {
    describe('Color of circle',() => {
       it('should compare the logo color of two circle logos', () => {
        const shape = new circle();
        shape.setLogoColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
       })
    })
})

describe('Shapes', () => {
    describe('Color of square',() => {
       it('should compare the logo color of two square logos', () => {
        const shape = new square();
        shape.setLogoColor("blue");
        expect(shape.render()).toEqual('<rect x="100" y="55" width="110" height= "110" fill="blue" />');
       })
    })
})