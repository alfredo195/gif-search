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
