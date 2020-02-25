const connection = require('./connection');
const mysql = require('mysql');

function dbmake(connection) {
    let database = Object.assign({}, functions);
    database.connection = connection.query;
    return database;
}

const functions = {
    findAllEmployees() {
        // this.connection.query('SELECT * FROM employee');
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

let db = dbmake();

module.exports = db;

db.removeEmployee(1);