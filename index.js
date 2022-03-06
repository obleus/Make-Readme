const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);
const questions = () => 
  inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "What is the author's name?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a brief description of your project:",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "installations",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);

function generateMD(data) {
 
  let badge = "";
    if(data.license == "MIT"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
    }else if (data.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (data.license == "GPL 3.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)"
    }else if (data.license == "BSD 3"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
    }


  return `# ${data.title}  
${badge}
${data.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Usage:
${data.usage}
### License:
This project is licensed under:
${data.license}
### Contributing:
${data.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${data.username}) or contact 
${data.author} at ${data.email}  
 `
}

questions()
.then((data) => writeFileAsync('generatedREADME.md',
generateMD(data)))
  .then(() => console.log('Sucess'))
  .catch((err) => console.error(err));

  // Function to initialize the app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((projectData) => {
    return generateMarkdown(projectData);
  })
  .then((markdown) => writeToFile('README.md', markdown));