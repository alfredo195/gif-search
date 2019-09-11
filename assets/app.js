$(document).ready(function() {

    var animalList = [
      "hippopotamus",
      "koala",
      "pig",
      "puma",
      "snake",
      "dog",
      "cat",
      "alpaca",
      "frog",
      "cow",
      "donkey",
      "armadillo",
      "seal",
      "gorilla",
    ];

    function displayAnimals(){
        var animalList = $(this).attr("")

        var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&api_key=qhZP9JnDanZ5O7LQzXiFYgX18hKKgdFX&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"  
      }).then(function(response){
        var results = response.data

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class = 'animal'>");
            var animalGif = $("<img>")
            animalGif.attr("src",results[i].images.fixed_height.url);
            gifDiv.append(animalGif);
            $("#animal-view").prepend(gifDiv);
        }
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }


      })
        
    }

  $("#find-animal").on("click", function(event) {
    event.preventDefault();


    var animal = $("#animal-input").valueOf();

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&api_key=qhZP9JnDanZ5O7LQzXiFYgX18hKKgdFX&limit=10";
  });


  function renderButtons() {
    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < animalList.length; i++) {
      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("gif-btn");
      // Adding a data-attribute
      a.attr("data-name", animalList[i]);
      // Providing the initial button text
      a.text(animalList[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where a movie button is clicked
  $("#find-animal").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#animal-input")
      .val()
      .trim();
    $("#animal-input").val("");
    // Adding movie from the textbox to our array
    animalList.push(animalList.trim());

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".gif-btn", displayAnimals);

  
  renderButtons();

});
