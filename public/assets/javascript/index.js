console.log("hello houston");



$("#scrapeSite").on("click", function () {
    location.href = "/scrape";
});

$(".articleContainer").on("click", ".savebutton", function () {
    let id = $(this).attr("data-id");

    $.ajax({
        method: "PUT",
        url: "/api/headlines/" + id,
        data: {
            saved: true
        }
    }).then(function (response) {
        console.log(response);

    });

});

$(".articleContainer").on("click", ".removebutton", function () {
    let id = $(this).attr("data-id");

    $.ajax({
        method: "PUT",
        url: "/api/headlines/" + id,
        data: {
            saved: false
        },
        success: function (response) {
            console.log(response);


        },
        error: function (error) {
            console.log(error);

        }

    })
});