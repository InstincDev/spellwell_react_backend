const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    const user = {
        name: "Bob",
        id: "1a2b3c",
        tests: ["test1", "test2", "test3"],
        test1: {
            baseWords: ["at", "cat", "hat"],
            challengeWords: ["you", "me", "they"],
        },
        test2: {
            baseWords: ["at2", "cat2", "hat2"],
            challengeWords: ["you2", "me2", "they2"],
        },
        test3: {
            baseWords: ["at3", "cat3", "hat3"],
            challengeWords: ["you3", "me3", "they3"],
        },
    };

    res.json(user);
});

app.post("/addtest", (req, res) => {
    try {
        const testData = req.body;
    if (!testData.title || !testData.baseWords || !testData.challengeWords) {
        console.log("Invalid Test Data");
        return res.status(300).send()
    }
    res.status(200).send();
    } catch (err) {
       res.status(400).send() 
     console.log(err)   
    }
});

app.listen(3001, () => {
    console.log(`The port is running on 3001`);
});
