console.log("hello world");
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  


  function getConstellations() {
    const newOp = $("<option>");
    $.get("/api/constellations", function(data) {
      const optionsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        optionsToAdd.push(createConstellationOption(data[i.name]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }
});
