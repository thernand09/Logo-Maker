//Jest tests for shape contructors

//Constructor class shapes is imported
const {Triangle, Circle, Shape} = require('./shape.js')

//Test for class Circle is created
/*Input: Blue, White, Text
Output: expextedRender*/
describe('Circle', () => {
    it('should return data from circle constructor', () =>
{
const color = 'blue';
const textColor = 'white';
const text = 'This is a text';
const expectRender = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />
<text x="150" y="150" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
const circle = new Circle (color, textColor, text);
    expect (circle.render()).toEqual(expectRender);
});
});

//Test for class Triangle is created
/*Input: Purple, White, Text
Output: expextedRender*/
describe('Triangle', () => {
    it('should return data from triangle constructor', () =>
{
const color = 'purple';
const textColor = 'white';
const text = 'This is a text';
const expectRender = `<polygon points="150,50 250,200 50,200" fill="${this.color}" />
<text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`;
const triangle = new Triangle (color, textColor, text);
    expect (triangle.render()).toEqual(expectRender);
});
});

//Test for class Square is created
/*Input: Green, White, Text
Output: expextedRender*/
describe('Shape', () => {
    it('should return data from triangle constructor', () =>
{
const color = 'green';
const textColor = 'white';
const text = 'This is a text';
const expectRender = `<circle cx="150" cy="100" r="80"  fill="${this.color}" />
<text x="50%" y="50%" fill="${this.textColor}" font-size = "50" font-family="Arial" text-anchor="middle" dy=".3em">${this.text}</text>`
const shape = new Shape (color, textColor, text);
    expect (shape.render()).toEqual(expectRender);
});
});