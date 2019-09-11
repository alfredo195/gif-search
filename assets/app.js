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
});
