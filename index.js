const inquirer = require('inquirer');
const fs = require('fs');
const drawShape = require('./lib/shapes.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');


inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = [

    {
        type: 'maxlength-input',
        name: 'text',
        message: 'What letters would you like? (must only be 3 characters)',
        maxLength: 3
       
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What text color would you like?',
    },
    {
        type: 'list',
        name: 'shapes',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color would you like for your shape?',
    }
];
    
    function init() {
        inquirer
        .prompt(questions)
        .then((data) => {
        const markFile = drawShape(data);
            fs.writeFile('./logo.svg', markFile, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            );
        });

    }
        
    


init();