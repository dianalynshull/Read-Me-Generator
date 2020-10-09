const inquirer = require("inquirer");
const fs = require("fs");

promptQuestions();

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
    ])
}

// // function to write README file
// function writeToFile(fileName, data) {
//     // Title
//     // Table of Contents
//     // Badge for License
//     // Description
//     // Installation Instructions
//     // Usage
//     // Contributing
//     // Tests
//     // License
//         // License Info
//     // Questions
//         // Github Username (link to their profile)
//         // Email
//         // Instructions for contact 
// }

// // function to initialize program
// function init() {
//     // node index.js? Or start?
// }

// // function call to initialize program
// init()
