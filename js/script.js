$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var vacation = $("#vacation-type").val();
    var zone = $("#zone").val();
    var activities = $("#activities").val();
    var food = $("#food").val();
    var self = $("#self").val();
    var vic;

    if (vacation === "Relaxed and lazy" && (zone === "Tropical" || zone === "Neither") && (activities === "Hiking" || activities === "Boating" || activities === "Swimming") && (food === "Asian" || food === "Vegan" || food === "American") && (self === "Shy" || self === "Polite" || self === "Upbeat")) {
      vic = "Fiji";
    }
    else if (vacation === "Busy and full of activity"  && (zone === "Tropical" || zone === "Tundra" || zone === "Neither") && activities === "Racing" && food === "American" && (self === "Upbeat" || self === "Polite" || self === "Outgoing")) {
      vic = "Virginia International Raceway"
    }
    else if (vacation === "Free and adventurous" && zone === "Tundra" && (activities === "Hiking" || activities === "Swimming") && food === "European" && (self === "Shy" || self === "Polite" || self === "Outgoing")) {
      vic = "The Island of Iceland"
    }
    else {
      vic = "The Island of Hawaii"
    }
    $("#match").show();
    $(".vic").text(vic)
    event.preventDefault();
  });
});
