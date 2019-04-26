const chalk = require('chalk');
/**@type {{}} */
const questions = require("./questions");
// console.log(Object.values(questions).reduce((p,m)=>p.concat(m),[]));
// console.log(questions);
Object.keys(questions).forEach((key)=>{
    console.log(chalk.red(key));
    questions[key].forEach((v,i)=>{
        process.stdout.write(chalk.bold(i+1)+") ");
        console.log(v);
        console.log()});
})