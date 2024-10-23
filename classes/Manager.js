const { Employee } = require("./Employee")

class Manager extends Employee {
    #employeesManaged
    constructor(name, position, salary, department) {
        super(name, position, salary)
        this.department = department;
        this.#employeesManaged = [];
    }

    getEmployeesManaged() {
        return this.#employeesManaged;
    }
    
    setEmployeesManaged(employee) {
        if (employee instanceof Employee) {
            this.#employeesManaged.push(employee);
        } else {
            throw new Error('Invalid employee object');  // Handle invalid input
        }
    }
}

module.exports = {
    Manager,
}