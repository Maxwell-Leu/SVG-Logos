const inquirer = require('inquirer');

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
        message: 'What is the of your logo?',
        name: 'shape',
    },
  ])
  .then((data) =>
    console.log('works')
  );