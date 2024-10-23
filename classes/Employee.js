class Employee {
    static #allEmployees = []

    #salary
    #isHired
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employee.#addEmployee(this);
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(salary) {
        this.#salary = salary;
    }
    
    getStatus() {
        return this.#isHired;
    }

    setStatus(command) {
        if (command === "fire") {
            this.#isHired = false;
        } else {
            this.#isHired = true;
        }
    }

    static #addEmployee(employee) {
        Employee.#allEmployees.push(employee);
    }

    static getEmployees() {
        return Employee.#allEmployees;
    }

    static getTotalPayroll() {
        return Employee.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0);
    }
}

module.exports = {
    Employee,
}
