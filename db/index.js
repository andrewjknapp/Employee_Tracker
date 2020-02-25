const connection = require('./connection');
const mysql = require('mysql');

function dbmake(connection) {
    let database = Object.assign({}, functions);
    database.connection = connection;
    return database;
}

const functions = {
    findAllEmployees() {
       return this.connection.query(
           `
           SELECT 
                e.first_name AS First,
                e.last_name AS Last,
                r.title AS Role,
                d.name AS Department 
           FROM employee e
           INNER JOIN role r ON e.role_id = r.id 
           INNER JOIN department d ON r.department_id = d.id
           `);
    },

    findAllDepartments() {
        console.log("Hello");
    },

    findAllRoles() {
        console.log("Hello");
    },

    findAllPossibleManagers(employeeId) {
        console.log("Hello");
    },

    findAllEmployeesByDepartment (departmentId) {
        console.log("Hello");
    },

    findAllEmployeesByManager() {
        console.log("Hello");
    },

    createEmployee(employee) {
        console.log("Hello");
    },

    createDepartment(department) {
        console.log("Hello");
    },

    createRole(role) {
        console.log("Hello");
    },

    updateEmployeeRole() {
        console.log("Hello");
    },

    updateEmployeeManager() {
        console.log("Hello");
    },

    removeEmployee(employeeId) {
        console.log("Hello");
    },

    removeDepartment(departmentId) {
        console.log("Hello");
    },
    
    removeRole(roleId) {
        console.log("Hello");
    }
};

let db = dbmake(connection);

module.exports = db;

//console.log(db);