// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


class Employee {
    constructor(name, id, email, role){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee';
    }

}



module.exports = Employee