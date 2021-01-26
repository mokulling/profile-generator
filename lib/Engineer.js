const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.



class Engineer extends Employee {
    constructor(name,id, email, github){
        super(name, id, email)
        this.github = github
        this.role = 'Engineer'
        

    }





    getRole(){
        return 'Engineer';

    }

    getGithub(){
        return this.github;
    }
  

}



/*class Rectangle extends Shape {
    constructor(sideA, sideB) {
      const area = sideA * sideB;
      const perimeter = sideA * 2 + sideB * 2;
  
      super(area, perimeter);
      this.sideA = sideA;
      this.sideB = sideB;
    }
  }


  class Shape {
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      for (const key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  

/*const engineer = new Engineer ('Steve', 1, 'test@gmail.com', 'test')
console.log(engineer)*/

module.exports = Engineer