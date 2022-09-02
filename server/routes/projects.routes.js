const router = require("express").Router()
const projectController = require ("../controllers/projects.controller")
const multer = require("multer")
const upload = multer()

router.get("/", projectController.readProject)
router.post("/", upload.single("file"), projectController.createProject)
router.put("/:id", projectController.updateProject)
router.delete("/:id", projectController.deleteProject)

