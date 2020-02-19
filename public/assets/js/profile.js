$(document).ready(function() {
  function getUserName() {
    $.get("/api/user_data").then(function(data) {
      $("#userName").text(data.name);
      populateUserInfo(data);
    });
  }

  function populateUserInfo(data) {
    const info = `
      <h3>Welcome ${data.name}</h3>
      <p>Your email is ${data.email}</p>`;
    const infoDiv = $(".const-info");
    infoDiv.append(info);
  }
  getUserName();
});
