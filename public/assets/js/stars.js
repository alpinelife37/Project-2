console.log("hello world stars.js");
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
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
});

/* Pseudocoding
On load 
  loop through db
  create tags for each object.name

On search 
  get reqest for object with object.name === name chosen
    Populate in const-info
    {{#each stars}}
        <p>Name: {{name}} ({{abbr}})</p>
        <p>Derived from: {{genitive}}</p>
        <p>Mythological Character: {{en}}</p>
        <p>Description: {{description}}</p>
        {{/each}}
  
  get request to 3rd party api
    Add name chosen to https://starregistration.net/media/wysiwyg/Constellations/${`name chosen`}.png(601 kB)
    Populate in const-img
*/
