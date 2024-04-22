const express = require('express');
const router = express.Router();
const path = require('path');
// import some json data to work with. normally there would be a database connection. 
const data = {}; // an empty object 
data.employees = require('../../data/employees.json');

router.route('/')
.get((req, res) => {
    res.json(data.employees);
})
.post((req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    });
})
.put((req, res) => { 
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    });
})
.delete((req, res) => {
    res.json({"id": req.body.id});
});

router.route('/:id')
    .get((req, res) => {
        res.json({"id": req.params.id}); 
    })


module.exports = router;