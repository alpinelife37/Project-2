// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $("select").change(event => {
    event.preventDefault();
    var str = "";
    $("select option:selected").each(function() {
      str += $(this).text();
    });
    $("div.const-info").html("");
    getInfo(str);
    populateImg(str);
  });
  getConstellations();
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

  function getInfo(name) {
    $.ajax({
      method: "GET",
      url: "/api/constellations"
    }).then(result => {
      for (i = 0; i < result.length; i++) {
        const constObj = result[i];
        if (constObj.name === name) {
          populateInfo(constObj);
        }
      }
    });
  }

  function populateImg(name) {
    const imgDiv = $(".const-image");
    const imgTag = $("<img id='starImg'>");
    const constName = name
      .trim()
      .toLowerCase()
      .replace(/\s/g, "_");
    const newName = constName.charAt(0).toUpperCase() + constName.slice(1);
    const constImage = `https://starregistration.net/media/wysiwyg/Constellations/${newName}.png`;
    imgDiv.append(imgTag);
    $("#starImg").attr({ src: constImage, alt: name });
    if (newName === "Bo\u00f6tes") {
      const constImage =
        "https://starregistration.net/media/wysiwyg/Constellations/Bootes.png";
      imgDiv.append(imgTag);
      $("#starImg").attr({ src: constImage, alt: name });
    }
  }

  function populateInfo(data) {
    const info = `
      <p>Name: ${data.name} (${data.abbr})</p>
      <p>Derived from: ${data.genitive}</p>
      <p>English Translation: ${data.en}</p>`;
    const infoDiv = $(".const-info");
    infoDiv.append(info);
  }
});
