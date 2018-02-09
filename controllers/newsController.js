// var express = require('express');

// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/news.js");

// // create router for app
// var router = express.Router();

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
     
// });

// // router.post("/burgers/insertOne", function (req, res) {
// //     console.log(req.body.burger)
// //     burger.create([
// //         "burger_name", "devoured"
// //     ], [
// //             req.body.burger, 0
// //         ], function (result) {
// //             // Send back the ID of the new quote
// //             res.redirect("/");
// //         });
// // });

// // router.put("/burgers/:id", function (req, res) {
// //     var condition = "id=" + req.params.id;
// //     console.log(condition);
// //     var eaten = req.body.state;
// //     console.log(eaten);

// //     // when looking at the mySQL database, we can see that the 0 shows uneaten, and the 1 shows devoured
// //     var eatenNum;
// //     if (eaten === "yes") {
// //         eatenNum = 0;
// //     } else {
// //         eatenNum = 1;
// //     }


//     // console.log("condition", condition);

//     // burger.update({
//     //     "devoured": eatenNum
//     // }, condition, function (result) {
//     //     if (result.changedRows == 0) {
//     //         // If no rows were changed, then the ID must not exist, so 404
//     //         return res.status(404).end();
//     //     } else {
//     //         res.status(200).end();
//     //     }
//     // });

// // });

// //export router
// module.exports = router;