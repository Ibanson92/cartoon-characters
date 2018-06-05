$(".character").on("click", function() {
    event.preventDefault();
    // var newcharacter = $(".character").eq(0).val();
    var characterButton = $("<button>");
   
        // Grabbing and storing the data-animal property value from the button
        var newcharacter = $(this).attr(".character");
  
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        newcharacter + "&api_key=dc6zaTOxFJmzC&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);
  
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var animalDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var animalImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              animalImage.attr("src", results[i].images.fixed_height.url);
  
              // Appending the paragraph and image tag to the animalDiv
              characterButton.append(p);
              characterButton.append(animalImage);
  
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $(".cartoon-list").prepend(characterButton);
            }
          });
      });
    // var state = $(this).attr("data-state");
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    // // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // // Then, set the image's data-state to animate
    // // Else set src to the data-still value
    // if (state === "still") {
    //   $(this).attr("src", $(this).attr("data-animate"));
    //   $(this).attr("data-state", "animate");
    // } else {
    //   $(this).attr("src", $(this).attr("data-still"));
    //   $(this).attr("data-state", "still");
    // }
    // $(".cartoon-list").prepend(characterButton);
    // console.log(newcharacter)
   
  