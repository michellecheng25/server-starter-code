/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require("sequelize"); // Import Sequelize
const db = require("../db"); // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media.istockphoto.com/vectors/young-teenage-woman-uses-laptop-for-work-or-chatting-with-friends-vector-id1188816693?k=20&m=1188816693&s=612x612&w=0&h=WIQcHnSo8kDmWBdBYcd8wX8PdJ6alsDYb4LQYRcVRxM=",
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

// Export the student model
module.exports = Student;
