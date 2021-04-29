import projectsRoutes from "./projects";
import tasksRoutes from "./tasks";

module.exports = (router) => {
  // Projects
  router.use("/projects", projectsRoutes);
  
  // Tasks
  router.use("/tasks", tasksRoutes);
};
