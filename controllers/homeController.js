module.exports ={
    getRoot: (req,res) =>{
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
    },


}
