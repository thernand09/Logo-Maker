// Imports inquirer package to be used in the file
const inquirer = require('inquirer')
// Calls file system
const fs = require('fs')

// Created an array of questions
const questionPrompts = [
    {
        // Grabs the logo text from the command line prompt
        type: 'input',
        message: 'Please enter logo text that is at least three characters long',
        name: 'logoText',
        // This will ensure input is only three characters
        validate: function(input) {
            if (input.length < 3) {
                return 'Logo text must be at least three characters.';
            }
            return true;
        }
    },
    {
        // Prompts the text color from the terminal input
        type: 'input',
        message: 'Please enter logo text color value',
        name: 'logoTextColor',
    },
    {
        // Prompts the user what type of shape the logo should be. 
        type: 'list',
        message: 'What shape would you like the logo to have?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'logoShape',
    },
    {
        // Prompt the user what color the logo should from terminal.
        type: 'input',
        message: 'Enter shape color value',
        name: 'logoShapeColor',
    },
];

function init(){
    inquirer.prompt(questionPrompts).then((answers) => {

   //Calls the shapes constructor
    const {Shape, Triangle, Circle } = require('./lib/shapes');

    //Creates the value of shape
    let shape;

    //Switch statement to call a specfic function 
    //Passes the shape color, logo color and logo text to the constructor. 
    switch (answers.logoShape) {
    case 'Circle':
        shape = new Circle(answers.logoShapeColor,answers.logoTextColor, answers.logoText);
        break;
    case 'Triangle':
        shape = new Triangle(answers.logoShapeColor,answers.logoTextColor, answers.logoText);
        break;
    case 'Square':
        shape = new Shape(answers.logoShapeColor,answers.logoTextColor, answers.logoText);
        break;
    default:
        console.log('Invalid shape selection.');
        return;
    }

    //Calls the render function from the shapes file
    const shapeTemp = shape.render();
    
    //Test condition
    //console.log(shapeTemp);

    // Calls the write to file function to create the file. 
    writeToFile("./examples/newShape.svg" , generateShape(shapeTemp))
    });
}

// Shapes generateShapes function to generate the svg file.
function generateShape(shape) {

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
         ${shape}
         
    </svg>
    `;
}

//Write to file function to write the data to the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    // prints out error message if the file cannot be generate.
    // prints out successful message if the file generates. 
    err ? console.error(err) : console.log('Shape generation is successful!')
    );
}

//Calls the init function to run the application.
init();