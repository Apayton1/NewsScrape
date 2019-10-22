

$("#scrapeButton").on("click", function () {
    $.ajax({
        type: "GET",
        url: "/scrape"
    }).then(function (response) {
        console.log(response);

        const articleResults = $("#results");
        articleResults.empty();


        for(var i = 0; i < response.length; i++){
            console.log(response[i]);
            $("#articleTable").append(
                '<tr>' + 
                  '<td>' + response[i].title + '</td>' + 
                  '<td>' + response[i].summary + '</td>' + 
                  '<td>' + response[i].link + '</td>' + 
                 
                '</tr>'
              );
    

        }})

        // for( i = 0; i < response; i++){
        //     const article = response[i];

        //     const saveButton = $("<button>")
        //         .addClass("saveButton")
        //         .text("Save")
        //         .attr("id", article._id);

        //     const title = $("<div>")
        //         .addClass("title")
        //         .text(article.title)
        //         .append(saveButton);

        //     const link = $("<a>")
        //         .addClass("link")
        //         .text(article.link)
        //         .attr("href", article.link)
        //         .attr("target", "_blank");

        //     const summary = $("<p>")
        //         .addClass("summary")
        //         .text(article.summary)

        //     const listItem = $("<li>")
        //         .addClass("article")
        //         .append(title, link, summary);

        //     articleResults.append(listItem);
        // }
    // });

    hideContainer();
    showScrapeResults();
});

const hideContainer = function() {
    $("#container").hide();

};

const showScrapeResults = function() {
    $("#scrapeResults").show(600);
};

    
