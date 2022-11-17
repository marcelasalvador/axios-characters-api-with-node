const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

//Create new character
router.post("/characters/create", (req,res,next) => {
    axios.post("https://ih-crud-api.herokuapp.com/characters", {
    name: "Harry Potter",
    occupation: "master wizard",
    weapon: "magic",
    debt: false

})
    .then(responseFromApi => {
        res.render("characters", { characters: responseFromAPI.data });
    })
        
    .catch (err => console.log(err))

})


//character details page

router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

//Update Character

router.post("/characters/:id", (req, res, next) => {
    axios.post(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/:id", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.get("/characters/:id/edit", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("edit-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});


router.post("/characters/:id/update", (req, res, next) => {

    axios.put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`,{
        "name": "Henry"

    })

    .then(responseFromAPI => {
        
        res.render("/characters/:id", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))

})


// Delete character




module.exports = router;


// https://ih-crud-api.herokuapp.com/characters