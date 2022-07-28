// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a Description",
    name: "description",
  },
  {
    type: "input",
    message:
      "Enter Installation Instructions with steps separated by semicolons(;)",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter Usage Information",
    name: "usage",
  },

  {
    type: "input",
    message: "Enter the paths to images separated by semicolons(;)",
    name: "images",
  },
  {
    type: "input",
    message: "Enter Contribution Guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter Testing Instructions with steps separated by semicolons(;)",
    name: "test",
  },
  {
    type: "input",
    message: "Which License are you using?",
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file+
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README created")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const licenseLink = renderLicenseLink(response.license)
    const licenseBadge = renderLicenseBadge(licenseLink)
    const licenseSection = renderLicenseSection(response.license)
    const license = {badge:licenseBadge,section:licenseSection}
    const data = generateMarkdown(response,license);
    writeToFile("README-generated.md", data);
  });
}

// Function call to initialize app
init();
