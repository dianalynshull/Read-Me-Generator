const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptQuestions() {
    console.log("Please fill out the following");
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title: "
        },
        {
            type: "input",
            name: "description",
            message: "Description of Application: "
        },
        {
            type: "input",
            name: "install",
            message: "Installation Instructions: "
        },
        {
            type: "input",
            name: "usage",
            message: "Application Usage: "
        },
        
        {
            type: "input",
            name: "contributors",
            message: "Contributors/Credits: "
        },
        {
            type: "input",
            name: "tests",
            message: "Application Testing: "
        },
        {
            type: "input",
            name: "github",
            message: "GitHub Username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email: "
        },
        {
            type: "input",
            name: "contact",
            message: "Contact Preferences: "
        }
    ]);
};

// function to write README file
function writeToFile(answers) {
    return `
# ${answers.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Application Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Contact Me](#contact)
## Description <a id="description"></a>
* ${answers.description}
## Installation <a id="installation"></a>
* ${answers.install}
## Application Usage <a id="usage"></a>
* ${answers.usage}
## Contributors <a id="contributors"></a>
* ${answers.contributors}
## Running Tests <a id="testing"></a>
* ${answers.tests}
## Contact Me <a id="contact"></a>
* Github: ${answers.github}
* Email: ${answers.email}
* Preferred Contact: ${answers.contact}`;
    
    // Table of Contents
    // Badge for License
    // Description
    // Installation Instructions
    // Usage
    // Contributing
    // Tests
    // License
        // License Info
    // Questions
        // Github Username (link to their profile)
        // Email
        // Instructions for contact 
}

// function to initialize program
async function init() {
    try {
      const answers = await promptQuestions();
  
      const readme = writeToFile(answers);
  
      await writeFileAsync("README.md", readme);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }

// function call to initialize program
init()
