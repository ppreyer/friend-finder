console.log("hello world");
$("#add-survey").on("click", function(event) {
  event.preventDefault();

var newSurvey = {
  name: $("#name").val().trim(),
  photo: $("#image").val().trim(),
  scores: [
            $("#one").val().trim(),
            $("#two").val().trim(),
            $("#three").val().trim(),
            $("#four").val().trim(),
            $("#five").val().trim(),
            $("#six").val().trim(),
            $("#seven").val().trim(),
            $("#eight").val().trim(),
            $("#nine").val().trim(),
            $("#ten").val().trim()
          ],
}

// console.log(newSurvey);

$.post("/api/friends", newSurvey).done(function(data) {
  console.log("new friend added", data);
})

})