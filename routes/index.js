import projectsRoutes from "./projects";
import tasksRoutes from "./projects";

module.exports = (router) => {
  // Projects
  router.use("/projects", projectsRoutes);
  // Tasks
  router.use("/tasks", tasksRoutes);
};
