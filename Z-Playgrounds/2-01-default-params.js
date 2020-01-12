const chalk = require('chalk')

const greeter = (name = 'Faraz', {
    age = 12,
    sex = 'M'
} = {}) => {
    console.log('hi ' + name + age + sex)
}

console.log(chalk.red.bold('Whith Explicit value passes to greeter:'))
greeter('Adam', {
    age: 23,
    sex: 'F'
})

console.log(chalk.red.bold('Default value kicking in:'))
greeter()