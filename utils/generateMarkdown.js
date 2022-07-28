// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `!['license'](${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-red`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
This application is covered under the ${license} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  const installation = data.installation
    .split(";")
    .map((v, i) => `${i + 1}. ${v.trim()}`)
    .join("\n");
  
  const testing = data.test
    .split(";")
    .map((v, i) => `${i + 1}. ${v.trim()}`)
    .join("\n");

  return `# ${data.title}
## Description
${data.description}\n
${license.badge}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#test)
- [Questions](#questions)
- [License](#license)

## Installation
${installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${testing}

## Questions
[My GitHub Profile](https://github.com/${data.github})

If you have any questions about my project, [please contact me here](mailto:${data.email}).


${license.section}`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
