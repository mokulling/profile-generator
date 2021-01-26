const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer 
.prompt ( [
    {type: 'input',
    message: 'What is your name?',
    name: 'name',

    },
    {type: 'checkbox',
    message: 'What is your role?',
    choices: ['Engineer', 'Manager', 'Intern'],
    name: 'role',
},
{type: 'input',
message: 'What is your id',
name: 'id',

},
{type: 'input',
message: 'What is your email address?',
name: 'email'

}
    
]).then((response) => {
    let name = response.name
    let role = response.role
    let id = response.id
    let email = response.email
    if ( response.role == 'Engineer'){
        inquirer.prompt ([
            {type: 'input',
        message: 'What is your github username?',
        name: 'github'
        },]).then((response) => {
            const newEmployee = new Engineer(name, id, email, response.github)
            render(newEmployee)

            console.log(newEmployee)
            return newEmployee;

        })
        
        
    } else if (response.role == 'Manager') {
        inquirer.prompt([
            {type: 'input',
            message: 'What is your office number',
            name: 'office'
            },])
            const newEmployee = new Manager(name, id, email, response.office)
            render(newEmployee)

            console.log(newEmployee)
            return newEmployee;


    } else if (response.role == 'Intern') {
        inquirer.prompt([
            {type: 'input',
            message: 'What school did you go to?',
            name: 'school',

            },
        ,])
        const newEmployee = new Intern(name, id, email, response.school)
        console.log(newEmployee)
        render(newEmployee)

        return newEmployee;


    } 
    else {
        const newEmployee = new Employee(name,id,email, role)
        console.log(newEmployee)
        render(newEmployee)

        return newEmployee;

    }


    
})





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

