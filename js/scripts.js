$(document).ready(function() {
  $("form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();

    $(".firstName").text(firstNameInput);

    $("#letter").show();

    event.preventDefault();
  });

});