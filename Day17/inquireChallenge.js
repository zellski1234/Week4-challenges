import inquirer from 'inquirer';


// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });
  
inquirer
  .prompt([
    {
        type: `list`,
        name: "itemOrder",
        message: "What drink would you like to order?",
        default: "tea",
        choices: [
            "hot chocolate",
            "tea",
            "coffee",
            "soda",
            "waffles",
            "souls of the damned",
            "pancakes",
            "latte"
        ]
    }
])
.then((answers) => {
    console.info("One", answers.itemOrder, "coming up.");
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});