import { Project } from "../actions";
import responses from "../utils/responses";

exports.createProject = async (req, res) => {
  const { body } = req;
  const project = await Project.createProject(body);
  console.log("project", project);
  if (!project) {
    res
      .status(400)
      .send({
        status: responses.ERROR,
        message: project.response.data.message,
      });
  } else {
    res
      .status(200)
      .send({ status: responses.SUCCESS, data: project.data.data });
  }
};
