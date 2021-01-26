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
            const employee = new Engineer(name, id, email, response.github)
            render(Object.values(employee))
        })
        
        
    } else if (response.role == 'Manager') {
        inquirer.prompt([
            {type: 'input',
            message: 'What is your office number',
            name: 'office'
            },])

            const employee = new Manager(name, id, email, response.office)


    } else if (response.role == 'Intern') {
        inquirer.prompt([
            {type: 'input',
            message: 'What school did you go to?',
            name: 'school',

            },
        ,])
        

        const employee = new Intern(name, id, email, response.school)


    } 
    else {
        const employee = new Employee(name,id,email, role)
         

        render(Object.entries(employee))

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



