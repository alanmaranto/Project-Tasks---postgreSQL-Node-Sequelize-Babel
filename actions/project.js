import { Project } from "../models";

const createProject = async (data) => {
  console.log("si llego");
  try {
    console.log("data", data);
    const project = await Project.create(data, {
      fields: ["name", "priority", "description", "deliveryDate"],
    });
    return project;
  } catch (error) {
    console.log(error)
    return error;
  }
};

module.exports = { createProject };
