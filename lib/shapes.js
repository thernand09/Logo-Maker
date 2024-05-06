//Shape constructor that passes color, text color, and text string 
class Shape {
    constructor (color, textColor, text){
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
//Creates the  main body of the shape
    render (){
          return `<rect x="50" y="50" width="100" height="200" fill="${this.color}" />
        <text x="20" y="30" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`
    }
};

//Class that extend shape and creates triangle
class Triangle extends Shape {
    render (){
        return `<polygon points = "50,50 150,50 100,150" fill="${this.color}" />
        <text x="20" y="30" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`
    }
};
//Class that extend shape and creates circle
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="150" r="50" fill="${this.color}"/>
        <text x="20" y="30" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>`
    }
};

//This allows each class to be called
module.exports= {
    Shape,
    Triangle,
    Circle
};