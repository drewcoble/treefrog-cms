function addGetStartedListener() {
  $(".get-started").click(function(e) {
    console.log("getStarted clicked");
    //toggle all nav 'active' classes off
    $(".active-box").removeClass("active");
    //then toggle 'active' class on for 'add navigation'
    $("#addNav div").addClass("active");
    //Replace the html content and buttons with the 'add nav' content and buttons
    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());

    //remove listener from 'addNav' in nav bar
    $("#addNav").off();

    //add listeners to 'home' in nav bar and buttons on 'addNav' page
    addCreateMNListener();
    addHomeButtonListener();
  });
}

function addHomeButtonListener() {
  $("#home").click(function(e) {
    console.log("home clicked");

    //make sure the quill editor is not displayed
    hideQuillEditor();

    $(".active-box").removeClass("active");
    $("#home div").addClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());

    $("#home").off("click");
    // initButtons();
    addGetStartedListener();
  });
}

function addCreateMNListener() {
  $("#createMainNav").click(function(e) {
    console.log("create main nav clicked");
    $(".modal").css("display", "flex");
    $(".alert-box").html(TREEFROG_SERVICE.getAddMainNavModalContent());

    addModalButtonListeners();
  });
}

function displayQuillEditor() {
  //display the quill text editor
  if (!$(".ql-toolbar").length) {
    var quill = new Quill("#quillEditor", {
      theme: "snow"
    });
  } else {
    $(".ql-toolbar").css("display", "block");
  }
  $("#quillEditor").css("display", "block");
}

function hideQuillEditor() {
  $("#quillEditor").css("display", "none");
  var quill = "";
  $(".ql-toolbar").css("display", "none");
}

function addModalButtonListeners() {
  $("#createMNButton").click(function(e) {
    console.log("createMNButton clicked");
    //store input value in var named inputContent
    let inputContent = $("#createMNinput")
      .val() //grab the value from the input
      .toLowerCase(); //make the value lower case

    //check to see that input is NOT blank
    if (inputContent.length > 0) {
      // console.log(inputContent);
      //ASSUME THIS IS NOT A DUPLICATE ENTRY FOR NOW
      //if input is NOT blank AND this is not a duplicate value... Generate next page by passing name value to service.js
      //hide the modal
      $(".modal").css("display", "none");
      //display the new page content
      $(".text-wrapper").html(
        TREEFROG_SERVICE.getNewPageInfoContent(inputContent)
      );
      //run function to display quill editor
      displayQuillEditor();
      //display the new page button
      $(".btn-holder").html(TREEFROG_SERVICE.getNewPageInfoButton());
      //alert with the new main nav name
      alert("Your new Main Nav will be named '" + inputContent + "'");
    } else {
      //executes if input is blank
      console.log("no content in input");
      //show alert w/ error for blank input
      alert("ERROR! You must fill in the 'Main Nav Name' input");
    }
  });

  $(".close-modal").click(function() {
    $(".modal").css("display", "none");
  });
}

$(document).ready(function() {
  //when document is ready, run initButtons function
  // initButtons();
  addGetStartedListener();
});
