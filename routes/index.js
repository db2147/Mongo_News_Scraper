const express = require('express');
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
const db = require("../models");

/*router.get("/favicon.ico", function (req, res) {
    res.redirect("/");
})

*/
router.get("/", function (req, res) {

    // find a way to filter results to retrieve no duplicates
    db.News.find({}).then(function (data) {
        var hbsObject = {
            news: data
        };

        res.render("home", hbsObject);
    });

});

// This route renders the saved handlebars page
router.get("/saved", function (req, res) {


    db.News.find(
        {
            saved: true
        }
    ).then(function (data) {
        var hbsObject = {
            news: data
        };

        res.render("saved", hbsObject);
    });
});


router.put("/api/headlines/:id", (req, res) => {

    console.log(req.body);

    db.News.findOneAndUpdate({
        _id: req.params.id
    }, {
            $set: req.body
        }, {
            saved: req.body.saved
        }).then(function (article) {

            // res.redirect(303, '/');

        });




});
router.get("/scrape", (req, res) => {

    axios.get("https://www.theonion.com/").then(function (response) {
        // console.log(response.data);
        var $ = cheerio.load(response.data);

        let resArr = [];



        // r.forEach(element => {
        //     console.log(element);
        // });

        // .each is a function of cheerio; it iterates over a cheerio object,
        // executing a function for each matched element.

        $("article.postlist__item").each(function (i, element) {

            // let e = element.find("h1").innerText;
            //  console.log(e);

            // let h = $("article").find("h1").innerText;
            // console.log(h);

            let headline = $(this)
                .children("header")
                .children("h1")
                .text()
                .trim();


            let url = $(this)
                .children("header")
                .children("h1")
                .children("a").attr("href");


            let summary = $(this)
                .children(".item__content")
                .children(".entry-summary")
                .children("p")
                .text()
                .trim();


            let articleScraped = {
                title: headline,
                summary: summary,
                link: url

            }
            resArr.push(articleScraped);
        });
        insertIntoMongo(resArr);



    }).then(function (data) {
        // console.log(data);
        console.log("scraping complete")

    });

    function insertIntoMongo(arr) {
        db.News.create(arr).then(function () {
            console.log("data added: ", arr)
            // res.send("Scrape Complete");
            res.redirect("/");
            // })

            // .catch(function (err) {
            //     res.json(err);
            // });
        });
    }
});


module.exports = router;