class Document {
    constructor (eName) {
        this.EmployeeName = eName;
    }
}

class Employee {
    constructor (n) {
        this.name=n;
    }

    work(office) {
        let doc = new Document(this.name)
        for(let i=0;i<10;i++) {
        office.documents.push(doc)
        }
    }
}

class Manager { 
    constructor(n) {
        this.employees = []
        this.name = n;
    }

    hireEmployee (name) {
        let emp = new Employee(name)
        this.employees.push(emp);
    }

    askEmployeesToWork (office) {
        for(let employe of this.employees) {
            employe.work(office)
        }
    }
}

class Cleaner {
    constructor(n) {
        this.name = n;
    }
    clean () {
        console.log('Clean')
    }
}


class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name) {
        let c = new Cleaner(name);
        this.cleaners.push(c)
    }

    hireManager (name) {
        let m = new Manager(name);
        this.managers.push(m)
    }

    startWorkDay () {
        for(let manager of this.managers) {
            manager.askEmployeesToWork(this)
        }

        for (let cleaner of this.cleaners) {
            cleaner.clean()
        }
    }
}









