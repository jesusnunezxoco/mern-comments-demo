const express = require("express")
const app = express()
const cors = require('cors')

app.use(express.json())

const commentRoutes = require("./routes/comments")

// *http://localhost:3000/comments
app.use("/comments", commentRoutes)


const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))