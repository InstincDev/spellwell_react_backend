const express = require("express");
const cors = require("cors");
const app = express();
const getRoutes = require("./routers/getRoutes")
const postRoutes = require("./routers/postRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/", getRoutes)
app.use("/addtest", postRoutes)


app.listen(3001, () => {
    console.log(`The port is running on 3001`);
});
