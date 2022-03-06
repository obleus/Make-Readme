const fs = require('fs');
const util = requires ('util');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "author",
        message: "What is the author's name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
    },
    {
        type: "input",
        name: "installations",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?",
    },
]);
  };

