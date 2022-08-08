import inquirer from 'inquirer';

inquirer
    .prompt([
    {
      name: 'age',
      message: 'How old are you?'
    },
  ])
  .then((answers) => {
    console.log(`You are ${answers.age} years old`)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment")
      // Prompt couldn't be rendered in the current environment
    } else {
        console.log("Something else went wrong")
      // Something else went wrong
    }
  });
