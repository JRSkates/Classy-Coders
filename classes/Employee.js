class Employee {
    #salary
    #isHired
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
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
}

module.exports = {
    Employee,
}
