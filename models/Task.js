const Sequelize = require("sequelize");
const { sequelize } = require("../database/config/database");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    done: {
      type: Sequelize.BOOLEAN,
    },
    projectId: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

export default Task
