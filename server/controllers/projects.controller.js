const ProjectModel = require ("../models/projects.model")
const UserModel = require("../models/users.model")

const ObjectID = require ("mongoose").Types.ObjectId
const fs = require("fs")
const { promisify } = require("util")
const pipeline = promisify(require("stream").pipeline)

module.exports.readProject = (req,res) => {
    ProjectModel.find((err, docs) => {
        if(!err) res.send(docs)
        else console.log("error to get data:" + err)
    }).sort({ createdAt :-1})
}

module.exports.createProject = async (req,res) => {
    let fileName

    if (req.file !=null) {
        try{
            if (
                req.file.detectedMimeType != "image/jpg" &&
                req.file.detectedMimeType != "image/png" &&
                req.file.detectedMimeType != "image/jpeg"
            )
            throw Error("invalid file")

            if (req.file.size > 500000) throw Error("taille maximale dépassée")
        } catch (err) {
            const errors = uploadErrors(err)
            return res.status(201).json({errors})
        }
        fileName = req.body._id + Date.now() + ".jpg"

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../client/public/uploads/ProjectImages/${fileName}`
            )
        )
    }

    const newProject = new ProjectModel({
        userId: req.body.userId,
        picture: req.file !=null ? "./uploads/ProjectImages/" +fileName : "",
        projectName: req.body.projectName,
        description: req.body.description,
        completion: req.body.completion

    })

    try {
        const projectProfile = await newProject.save()
        return res.status(201).json(projectProfile)
    } catch(err) {
        return res.status(400).send(err)
    }
}

module.exports.updateProject = (req,res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown :" + req.params.id)

    const updatedRecord = {
        userId: req.body.userId,
        picture: req.file !=null ? "./uploads/ProjectImages/" +fileName : "",
        projectName: req.body.projectName,
        description: req.body.description,
        completion: req.body.completion
    }

    ProjectModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord},
        { new:true},
        (err,docs) => {
            if (!err) res.send(docs)
            else console.log("update errors:" + err)
        }
    )


module.exports.deleteProject = (req,res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id)

    ProjectModel.findByIdAndRemove(req.params.id, (err,docs) => {
        if (!err) res.send(docs).json({ message: "vous avez terminé ou abandonné ce projet"})
        else console.log("delete error" + err)
    })

}

}