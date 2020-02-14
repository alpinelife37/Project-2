// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  function getConstellations() {
    $.ajax({
      method: "GET",
      url: "/api/constellations"
    }).then(result => {
      for (i = 0; i < result.length; i++) {
        for (i = 0; i < result.length; i++) {
          let newOption = $("<option>" + result[i].name + "</option>");
          $("#inputConstName").append(newOption);
        }
      }
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
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $("#search").on("click", function(event) {
    event.preventDefault();
    console.log("clicked");
    populateImg();
    populateInfo();
  });

  function populateImg() {
    const imgDiv = $(".const-image");
    const imgTag = $("<img id='starImg'>");
    const constName = $("#inputConstName").val();
    const constImage = `https://starregistration.net/media/wysiwyg/Constellations/${constName}.png`;
    imgDiv.append(imgTag);
    $("#starImg").attr({ src: constImage, alt: constName });
  }

  function populateInfo() {
    console.log("Constellation Names");
    const info = `
      <p>Name: ${this.name} (${this.abbr})</p>
      <p>Derived from: ${this.genitive}</p>
      <p>Mythological Character: ${this.en}</p>`;
    const infoDiv = $(".const-info");
    infoDiv.append(info);
  }

  // function getConstellations() {
  //   const newOp = $("<option>");
  //   $.get("/api/constellations", function(data) {
  //     const optionsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       optionsToAdd.push(createConstellationOption(data[i.name]));
  //     }
  //     renderAuthorList(rowsToAdd);
  //     nameInput.val("");
  //   });
  // }
});
