module.exports ={
    addTests: (req, res) => {
        try {
            const testData = req.body;
        if (!testData.title || !testData.baseWords || !testData.challengeWords) {
            console.log("Invalid Test Data");
            return res.status(300).send()
        }
     /*
        -Create Teacher-
        const teacher = {
            id: 5234234,
            name: "Da Name",
            password: *********,
            testsCreated:[testId, testID],
            students:[studentID,studentID]
        }
        -Create Test-
        const test = {
            id,
            title,
            baseWords,
            challengeWords,
            studentsWhoTookTest = [studentsID, studentsID],
            teacherWhoCreatedTest = teachersID
        }
        -Create Student-
        const student = {
            id: 3242343242,
            name: "Da Name",
            password: *********,
            testsTaken: [{testId, grade},{testId, grade}]
        }
     */
        res.status(200).send();
        } catch (err) {
           res.status(400).send() 
         console.log(err)   
        }
    },

    testsTeacher: (req, res) =>{
        // user/teacher id 
        // tests that have that teacher's id
        
        //Get all tests with teacher id attached to them and return them as an array.
    },

    testsStudent: (req, res) =>{
        // user/student id 
        // tests that have that student's id 
        //Get all the tests with student id attached to them and return them as an array.
    }

}