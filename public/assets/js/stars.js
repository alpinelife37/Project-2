console.log("hello world");
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  function getConstellations() {
    //const newOp = $("<option>");

    $.ajax({
      method: "GET",
      url: "/api/constellations"
    }).then(name => {
      console.log(name);
    });
    // $.get("/api/constellations", function(data) {
    //   console.log(data);
    //   const optionsToAdd = [];
    //   for (var i = 0; i < data.length; i++) {
    //     optionsToAdd.push(newOp(data[i.name]));
    //   }
    // });
  }
  getConstellations();
});
