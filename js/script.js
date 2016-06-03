$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var vacation = $("#vacation-type").val();
    var zone = $("#zone").val();
    var activities = $("#activities").val();
    var food = $("#food").val();
    var self = $("#self").val();
    var vic1;
    var vic2;
    var vic3;
    var vic4;


    if (vacation === "Relaxed and lazy" && (zone === "Tropical" || zone === "Neither") && (activities === "Hiking" || activities === "Boating" || activities === "Swimming") && (food === "Asian" || food === "Vegan" || food === "American") && (self === "Shy" || self === "Polite" || self === "Upbeat")) {
      vic1 = "Fiji";
    }
    else if (vacation === "Busy and full of activity"  && (zone === "Tropical" || zone === "Tundra" || zone === "Neither") && activities === "Racing" && food === "American" && (self === "Upbeat" || self === "Polite" || self === "Outgoing")) {
      vic2 = "Virginia International Raceway"
    }
    else if (vacation === "Free and adventurous" && zone === "Tundra" && (activities === "Hiking" || activities === "Swimming") && food === "European" && (self === "Shy" || self === "Polite" || self === "Outgoing")) {
      vic3 = "The Island of Iceland"
    }
    else {
      vic4 = "The Island of Hawaii"
    }
    $("#match1").show();
    $(".vic1").text(vic1)

    $("#match2").show();
    $(".vic2").text(vic2)

    $("#match3").show();
    $(".vic3").text(vic3)

    $("#match4").show();
    $(".vic4").text(vic4)
    event.preventDefault();
  });
});
