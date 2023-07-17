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
        type: 'input',
        message: 'What is the shape of your logo?',
        name: 'shape',
    },
  ])
  .then((data) =>{
    logo = new circle(data.text,data.textColor,data.logoColor);
    logo.createFile()
    logo.appendCode()
  });