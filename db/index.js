const connection = require('./connection');
const mysql = require('mysql');

function dbmake(connection) {
    let database = Object.assign({}, functions);
    database.connect = connection;
    return database;
}

const functions = {
    findAllEmployees() {
       return this.connect.query(
           `
           SELECT 
                e.id,
                e.first_name AS First,
                e.last_name AS Last,
                r.title AS Title,
                d.name AS Department,
                r.salary AS Salary,
                CONCAT(m.first_name, " ", m.last_name) AS Manager

           FROM employee e
           LEFT JOIN role r ON e.role_id = r.id 
           LEFT JOIN department d ON r.department_id = d.id
           LEFT JOIN employee m ON e.manager_id = m.id
           ORDER BY e.id
           `);
    },

    findAllDepartments() {
        return this.connect.query(
            `
            SELECT 
                id, 
                name AS Departments
            FROM department
            `
        )
    },

    findAllRoles() {
        return this.connect.query(
            `
            SELECT 
                id,
                title AS Titles,
                salary AS Salary
            FROM role 
            `
        )
    },

    findAllPossibleManagers(employeeId) {
        return this.connect.query(
            `
            SELECT id, first_name, last_name
            FROM employee
            WHERE id <> ?
            `, employeeId
        )
    },

    findAllEmployeesByDepartment(departmentId) {
        return this.connect.query(
            `
            SELECT 
                e.id,
                e.first_name AS First,
                e.last_name AS Last,
                r.title AS Title,
                d.name AS Department,
                r.salary AS Salary,
                CONCAT(m.first_name, " ", m.last_name) AS Manager

           FROM employee e
           LEFT JOIN role r ON e.role_id = r.id 
           LEFT JOIN department d ON r.department_id = d.id
           LEFT JOIN employee m ON e.manager_id = m.id
           WHERE d.id = ?
           ORDER BY e.id
            `, departmentId
        )
    },

    findAllEmployeesByManager(managerId) {
        return this.connect.query(
            `
            SELECT 
                e.id,
                e.first_name AS First,
                e.last_name AS Last,
                r.title AS Title,
                d.name AS Department,
                r.salary AS Salary,
                CONCAT(m.first_name, " ", m.last_name) AS Manager

           FROM employee e
           LEFT JOIN role r ON e.role_id = r.id 
           LEFT JOIN department d ON r.department_id = d.id
           LEFT JOIN employee m ON e.manager_id = m.id
           WHERE e.manager_id = ?
           ORDER BY e.id
            `, managerId
        )
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

    updateEmployeeRole(employeeId, roleId) {
        return this.connect.query(
            `
            UPDATE employee
            SET ?
            WHERE ?
            `, [{
                role_id: roleId
            },
            {
                id: employeeId
            }]
        )
    },

    updateEmployeeManager(employeeId, managerId) {
        return this.connect.query(
            `
            UPDATE employee
            SET ?
            WHERE ?
            `, [{
                manager_id: managerId
            },
            {
                id: employeeId
            }]
        )
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