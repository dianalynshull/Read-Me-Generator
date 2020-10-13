const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
let license;
let badge;

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
            type: "list",
            name: "license",
            message: "Please choose a license: ",
            choices: ["Apache", "GNU GPLv3", "MIT", "ISC"],
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
function writeToFile(answers, badge, license) {
    if (answers.license === "Apache") {
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        license = "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)"
    }
    else if (answers.license === "GNU GPLv3") {
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        license = "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)"
    }
    else if (answers.license === "MIT") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        license = "[MIT](https://choosealicense.com/licenses/mit/)"
    }
    else if (answers.license === "ISC") {
        badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        license = "[ISC](https://choosealicense.com/licenses/isc/)"
    }
    return `
${badge}
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
## License
* ${license}
## Questions? Contact Me! <a id="contact"></a>
* Github: https://github.com/${answers.github}
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
