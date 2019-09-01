const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// router.get('/', (req,res) => {
//     res.send();
// });

// Setup a GET route to get all the feedback from the database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// // Update feedback for user
// router.put('/like/:id', (req, res) => {
//     const userId = req.params.id;
//     let sqlText = '';
//     sqlText = `UPDATE feedback SET likes=likes+1 WHERE id=$1`;
//     pool.query(sqlText, [galleryId])
//         .then((result) => {
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500);
//         })
// });

// POST feedback
router.post('/', (req, res) => {
    const newFeedback = req.body.github_name;
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments") 
    VALUES ($1,$2,$3,$4)`;

    pool.query(sqlText, [])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;