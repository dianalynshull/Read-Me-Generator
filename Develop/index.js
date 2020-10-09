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
            message: "Title of your application: "
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description of your application: "
        },
        {
            type: "input",
            name: "install",
            message: "Enter installation instructions for your application"
        },
        {
            type: "input",
            name: "usage",
            message: "Application usage"
        },
        
        {
            type: "input",
            name: "contributors",
            message: "Contributors"
        },
        {
            type: "input",
            name: "tests",
            message: "Application Tests"
        },
        {
            type: "input",
            name: "github",
            message: "GitHub Username"
        },
        {
            type: "input",
            name: "email",
            message: "Email"
        },
        {
            type: "input",
            name: "contact",
            message: "Contact Preferences"
        }
    ]);
};

// function to write README file
function writeToFile(answers) {
    return `
    ${answers.title}
    ${answers.description}
    ${answers.install}
    ${answers.usage}
    ${answers.contributors}
    ${answers.tests}
    ${answers.github}
    ${answers.email}`;
    
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
