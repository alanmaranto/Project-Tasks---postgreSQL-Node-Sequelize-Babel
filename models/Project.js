const Sequelize = require("sequelize");
import { sequelize } from "../database/config/database";

import Task from "./Task";

const Project = sequelize.define(
  "Project",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    deliveryDate: {
      type: Sequelize.DATE,
    },
  },
  { timestamps: false }
);

Project.hasMany(Task, { foreignKey: "projectId", sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: "projectId", sourceKey: "id" });

module.exports = Project;
