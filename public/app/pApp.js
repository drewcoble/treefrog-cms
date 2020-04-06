$(document).ready(function() {
  //   alert("ready");
  // run init firebase function, passing init() function as parameter (for use as callback function)
  PRACTICE_SERVICE.initFirebase(init);
});

function init() {
  $(".getData").click(function(e) {
    PRACTICE_SERVICE.getAllData(displayData);
  });
  $(".deleteData").click(function(e) {
    PRACTICE_SERVICE.getAllData(displayDeleteData);
  });
  $("#addData").click(function(e) {
    e.preventDefault();
    // console.log("add data");
    let navName = $("#dataInput")
      .val()
      .trim()
      .toLowerCase();
    if (navName.length < 1) {
      alert("input is empty");
    } else {
      PRACTICE_SERVICE.checkPages(navName, alertUser);
      // alert("'" + navName + "'" + " added to database");
      $("#dataInput").val("");
    }
  });
  // $("#checkPages").click(function(e) {
  //   e.preventDefault();
  //   console.log("check pages");
  //   PRACTICE_SERVICE.checkPages("home");
  // });
}

function displayData(addData) {
  var container = "<nav class='nav'>";
  addData.forEach(function(doc) {
    var id = doc.id;
    var rawData = doc.data();
    container += `<a href="#" id="${id}">${rawData.navName}</a>`;
  });
  container += "</nav>";

  $(".showData").html(container);
  addNavListener();
}

function displayDeleteData(deleteData) {
  var container = "<nav class='del'>";
  deleteData.forEach(function(doc) {
    var id = doc.id;
    var rawData = doc.data();
    container += `<a href="#" class='deletea' id="${id}">${rawData.navName}</a>`;
  });
  container += "</nav>";

  $(".showDeleteData").html(container);
  addDeleteListener();
}

function addNavListener() {
  $(".nav a").click(function(e) {
    var id = e.currentTarget.id;
    var newNavName = $("#updateContent")
      .val()
      .trim()
      .toLowerCase();

    if (newNavName.length > 0) {
      PRACTICE_SERVICE.updateData(id, newNavName, displayData);
    }
  });
}

function addDeleteListener() {
  $(".del a").click(function(e) {
    var id = e.currentTarget.id;
    PRACTICE_SERVICE.deleteData(id, displayDeleteData);
  });
}

function alertUser(message) {
  alert(message);
}
