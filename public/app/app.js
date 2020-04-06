var quill;
var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block", "image", "link"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean"] // remove formatting button
];

function addMainNav(navName) {
  console.log("addMainNav: ", navName);

  let pageFakeData = {
    navName: navName,
    content: "<h1>Fake Content</h1>",
    subNavs: []
  };
}

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
    quill = new Quill("#quillEditor", {
      modules: { toolbar: toolbarOptions },
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
  $(".ql-editor").html("");
  $("#htmlContainer").html("");
}

function addSavePageButtonListener() {
  $("#savePageInfo").click(function(e) {
    let pageContent = $(".ql-editor").html();
    console.log(pageContent);
    $("#htmlContainer").html(pageContent);
  });
}

var navNameUnique = true;

function addModalButtonListeners() {
  $("#createMNButton").click(function(e) {
    // // console.log("createMNButton clicked");
    // //store input value in var named inputContent
    let inputContent = $("#createMNinput")
      .val() //grab the value from the input
      .toLowerCase() // make the value lower case
      .trim(); //trim white space on both ends

    console.log("navName: ", inputContent);

    TREEFROG_SERVICE.checkMainNavName(inputContent, addMainNav);
    // //check to see that input is NOT blank
    // if (inputContent.length == 0) {
    //   //executes if input is blank
    //   console.log("no content in input");
    //   //show alert w/ error for blank input
    //   alert("ERROR! Please enter a value in the input.");
    // } else {
    //   //loop thru array holding nav names
    //   $.each(nameArray, function(idx) {
    //     if (inputContent == nameArray[idx].navName) {
    //       navNameUnique = false;
    //       console.log(
    //         nameArray[idx].navName + " matches input: " + inputContent
    //       );
    //       alert(
    //         "ERROR! This main nav name is already in use. Please try a different name."
    //       );
    //       return false;
    //     } else {
    //       navNameUnique = true;
    //     }
    //   });
    //   if (navNameUnique) {
    //     //hide the modal
    //     $(".modal").css("display", "none");
    //     //push an object to the array with the new value
    //     nameArray.push({ navName: inputContent });
    //     // console.log(nameArray);
    //     //display the new page content
    //     $(".text-wrapper").html(
    //       TREEFROG_SERVICE.getNewPageInfoContent(inputContent)
    //     );
    //     //run function to display quill editor
    //     displayQuillEditor();
    //     //display the new page button
    //     $(".btn-holder").html(TREEFROG_SERVICE.getNewPageInfoButton());
    //     //add listener for new 'save page info' button
    //     addSavePageButtonListener();
    //     //alert with the new main nav name
    //     // alert("Your new Main Nav will be named '" + inputContent + "'");
    //   }
    // }
  });

  $(".close-modal").click(function() {
    $(".modal").css("display", "none");
  });
}

$(document).ready(function() {
  //connect to firebase
  TREEFROG_SERVICE.initFirebase();
  //add listeners to home page buttons
  addGetStartedListener();
});
