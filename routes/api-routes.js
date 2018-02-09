// // apiroutes.js - this file offers a set of routes for displaying and saving data to the db

// // Dependencies
// // =========================================================================================

// // Require our News Model
// var News = require("../models/news.js");


// // Routes
// // =========================================================================================
// module.exports = function (app) {

//     // Get all books route
//     app.get("/api/all", function (req, res) {
//         Book.findAll({}).then(function (results) {
//             res.json(results);  // display everything we find
//         });
//     });

//     // Get a specific book route  // we use the same find function, but we put the where paramaters back in
//     app.get("/api/:book", function (req, res) {
//         if (req.params.book) {
//             Book.findAll({
//                 where: {
//                     title: req.params.book  // only display paramater for where title equals book
//                 }
//             }).then(function (results) {
//                 res.json(results); // display the results in json format
//             });
//         }
//     });

//     // Get all books of a specific genre
//     app.get("/api/genre/:genre", function (req, res) {
//         if (req.params.genre) {
//             Book.findAll({
//                 where: {
//                     genre: req.params.genre  // only display paramater for where title equals book
//                 }
//             }).then(function (results) {
//                 res.json(results); // display the results in json format
//             });
//         }
//     });

//     // Get all books from a specific author
//     app.get("/api/author/:author", function (req, res) {
//         if (req.params.author) {
//             Book.findAll({
//                 where: {
//                     author: req.params.author  // only display paramater for where title equals book
//                 }
//             }).then(function (results) {
//                 res.json(results); // display the results in json format
//             });
//         }
//     });

//     // Get all "long" books (books 300 pages or more)
//     app.get("/api/books/:long", function (req, res) {
//         if (req.params.genre) {
//             Book.findAll({
//                 where: {
//                     pages: {
//                         $gte: 300
//                     }
//                 }
//             }).then(function (results) {
//                 res.json(results); // display the results in json format
//             });
//         }
//     });

//     // Get all "short" books (books 150 pages or less)
//     app.get("/api/books/:short", function (req, res) {
//         if (req.params.genre) {
//             Book.findAll({
//                 where: {
//                     pages: {
//                         $lte: 150
//                     }
//                 }
//             }).then(function (results) {
//                 res.json(results); // display the results in json format
//             });
//         }
//     });

//     // Add a book  
//     app.post("/api/new", function (req, res) { // create a POST route for adding/deleting books

//         Book.create({
//             title: req.body.title,
//             author: req.body.author,
//             genre: req.body.genre,
//             pages: req.body.pages
//         });
//     });

//     // Delete a book
//     app.post("/api/delete", function (req, res) {
//         Book.destroy({
//             where: {
//                 id: req.body.id
//             }
//         });
//     });

// };