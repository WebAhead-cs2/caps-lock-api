
const router = require("express").Router()
const generalController = require("./controllers/general.controller")
const projectController = require("./controllers/projects.controller")

router.get("/", generalController.home)
router.get("/projects", projectController.getProjectsController)
module.exports = router
