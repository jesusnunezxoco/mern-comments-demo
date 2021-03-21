const express = require("express")
const router = express.Router()

//  GET
router.get("/", (req, res) => {
    res.send("We got all the comments!")
})

router.get("/search", (req, res) => {
    console.log(req.query.searchTerm)
})

router.get("/:commentId", (req, res) => {
    console.log(req.params.commentId)
    res.send("We got all the comments!")
})

router.post("/", (req, res) => {
    console.log(req.body.comment)
})






module.exports = router