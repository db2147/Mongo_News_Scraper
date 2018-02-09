const cheerio = require("cheerio");
const axios = require("axios");
const request = require("request");


function scrapeArticles() {
    return request("http://www.theonion.com").then(function (res) {
        var $ = cheerio.load(res.data);
        // Make an empty array to save our article info

        var articles = [];
        $(".theme-summary").each(function (i, element) {
            // In each .theme-summary, we grab the child with the class story-heading

            // Then we grab the inner text of the this element and store it
            // to the head variable. This is the article headline
            var head = $(this)
                .children(".story-heading")
                .text()
                .trim();

            // Grab the URL of the article
            var url = $(this)
                .children(".story-heading")
                .children("a")
                .attr("href");

            // Then we grab any children with the class of summary and then grab it's inner text
            // We store this to the sum variable. This is the article summary
            var sum = $(this)
                .children(".summary")
                .text()
                .trim();

            // So long as our headline and sum and url aren't empty or undefined, do the following
            if (head && sum && url) {
                // This section uses regular expressions and the trim function to tidy our headlines and summaries
                // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                // Initialize an object we will push to the articles array

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat,
                    url: url
                };

                articles.push(dataToAdd);
            }
        });
        return articles;

    });

}

module.exports = scrapeArticles;