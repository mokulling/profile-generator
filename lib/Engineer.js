const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.



class Engineer extends Employee {
    constructor(name,id, email, github){
        super(name, id, email)
        this.github = github
        this.role = 'Engineer'
        

    }





    getRole(){
        return this.role;

    }

    getGithub(){
        return this.github;
    }
  

}



  
  

/*const engineer = new Engineer ('Steve', 1, 'test@gmail.com', 'test')
console.log(engineer)*/

module.exports = Engineer