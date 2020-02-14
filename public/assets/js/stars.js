console.log("hello world");
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

/* Pseudocoding
On load 
  loop through db
  create tags for each object.name

On search 
  get reqest for object with object.name === name chosen
    Populate in const-info
  
  get request to 3rd party api
    Add name chosen to https://starregistration.net/media/wysiwyg/Constellations/${`name chosen`}.png(601 kB)
    Populate in const-img
*/
