$("#scrapeButton").on("click", function () {
    $.ajax({
        type: "GET",
        url: "/articles"
    }).then(function (response) {
        console.log(response);
    })
});
    
