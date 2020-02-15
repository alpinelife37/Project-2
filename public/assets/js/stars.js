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
  }

  function getUserName() {
    $.get("/api/user_data").then(function(data) {
      $("#userName").text(data.name);
    });
  }

  function getInfo() {
    $.ajax({
      method: "GET",
      url: "/api/constellations"
    }).then(result => {
      const constName = $("#inputConstName").val();
      for (i = 0; i < result.length; i++) {
        const constObj = result[i];
        if (constObj.name === constName) {
          populateInfo(constObj);
        }
      }
    });
  }

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $("#search").on("click", function(event) {
    event.preventDefault();
    $("div.const-info").html("");
    console.log("clicked");
    populateImg();
    getInfo();
  });

  function populateImg() {
    const imgDiv = $(".const-image");
    const imgTag = $("<img id='starImg'>");
    const constName = $("#inputConstName")
      .val()
      .trim()
      .toLowerCase()
      .replace(/\s/g, "_");
    const newConstName = constName.charAt(0).toUpperCase() + constName.slice(1);
    const constImage = `https://starregistration.net/media/wysiwyg/Constellations/${newConstName}.png`;
    imgDiv.append(imgTag);
    $("#starImg").attr({ src: constImage, alt: constName });
    console.log(newConstName);
    if (newConstName === "Bo\u00f6tes") {
      const constImage =
        "https://starregistration.net/media/wysiwyg/Constellations/Bootes.png";
      imgDiv.append(imgTag);
      $("#starImg").attr({ src: constImage, alt: constName });
    }
  }

  function populateInfo(data) {
    const info = `
      <p>Name: ${data.name} (${data.abbr})</p>
      <p>Derived from: ${data.genitive}</p>
      <p>Mythological Character: ${data.en}</p>`;
    const infoDiv = $(".const-info");
    infoDiv.append(info);
  }

  getConstellations();
  getUserName();
});
