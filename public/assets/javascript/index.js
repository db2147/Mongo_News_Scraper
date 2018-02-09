console.log("hello houston");



$("#scrapeSite").on("click", function () {
    location.href = "/scrape";
});

$(".articleContainer").on("click", ".savebutton", function () {
    let id = $(this).attr("data-id");
    console.log(id);
    $.ajax({
        method: "PUT",
        url: "/api/headlines/" + id,
        data: {
            saved: true
        }
    }).then(function (data) {
        // If the data was saved successfully

        console.log(data);


    });

});