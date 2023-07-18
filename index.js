const inquirer = require('inquirer');
const circle = require('./lib/circle');
const triangle = require('./lib/triangle');
const square = require('./lib/square');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the text in the logo?',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What is the text color?',
      name: 'textColor',
    },
    {
      type: 'input',
      message: 'What is the color of you logo?',
      name: 'logoColor',
    },
    {
        type: 'list',
        message: 'What is the shape of your logo?',
        choices:['Circle', 'Triangle', 'Square'],
        name: 'shape',
    },
  ])
  .then((data) =>{
    if(data.shape.toLowerCase() == 'circle'){
      logo = new circle(data.text,data.textColor,data.logoColor);
      logo.createFile()
      logo.appendCode()
    } else if(data.shape.toLowerCase() == 'triangle'){
      logo = new triangle(data.text,data.textColor,data.logoColor);
      logo.createFile()
      logo.appendCode()
    }else{
      logo = new square(data.text,data.textColor,data.logoColor);
      logo.createFile()
      logo.appendCode()
    }
  });