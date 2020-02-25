var TREEFROG_SERVICE = (function() {
  var _getGetStartedContent = function() {
    let contentStr = `<h1>Treefrog CMS</h1>
    <p>This is the screen where you will create your navigation and page content.</p>
    <p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p>
    <p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>
    `;

    return contentStr;
  };

  var _getHomeContent = function() {
    let contentStr = `<h1>Welcome to the Treefrog CMS</h1>
    <p>
      Here you will create your content for your webpages. You won't be able
      to create all page elements but only the content for the page.
    </p>

    <p>
      You must first create the navigation. Once you have the navigation
      created you can add page content and publish the page. You can even
      add sub navigation as well.
    </p>

    <p>
      Your fist step is to click on the Add Navigation link and add your
      first navigation link.
    </p>
    `;

    return contentStr;
  };

  var _getCreateNavButtons = function() {
    let navBtns = `<span id='createMainNav' class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;
    return navBtns;
  };

  var _getHomeStartButton = function() {
    let startBtn = `<span id="getStarted" class="btn btn-dark get-started">Get Started</span>`;
    return startBtn;
  };

  var _getAddMainNavModalContent = function() {
    let modalContent = `<div><h2>Use this box to create navigation links.</h2><p>You can create main navigation and sub navigation. To create a sub-navigation you will need to first select a main nav and then create the sub-nav.</p></div>
    <div class='modalInputContainer'><p>Using the text box below enter the name of your main navigation.</p><input id='createMNinput' placeholder='Main Nav Name'></input></div><div class='buttonHolder'><span id='createMNButton' class='btn btn-light'>Create Main Nav</span><span class='btn btn-light close-modal'>Cancel</span></div>`;
    return modalContent;
  };

  var _getEmptyInputModalMessage = function() {
    let modalContent = `<h2 class='errorHeading'>Error!</h2>
    <p>Your Main Nav Name Cannot Be Blank.<br>Please add a value in the input field and try again.</p>`;
    return modalContent;
  };

  var _getNewPageInfoContent = function(newPageName) {
    let newPageInfoContent = `<h1>Treefrog CMS</h1>
    <p>Now you have your navigation set now you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save Page Info". Once you have done that click on "PREVIEW SITE" to see what your web page looks like.</p>
    <h3>Nav > <span class='mainNavName'>${newPageName}</span></h3>`;
    return newPageInfoContent;
  };

  var _getNewPageInfoButton = function() {
    let savePageInfoBtn = `<span id="savePageInfo" class="btn btn-dark get-started">Save Page Info</span>`;
    return savePageInfoBtn;
  };

  return {
    getGetStartedContent: _getGetStartedContent,
    getCreateNavButtons: _getCreateNavButtons,
    getHomeContent: _getHomeContent,
    getHomeStartButton: _getHomeStartButton,
    getAddMainNavModalContent: _getAddMainNavModalContent,
    getNewPageInfoContent: _getNewPageInfoContent,
    getNewPageInfoButton: _getNewPageInfoButton,
    getEmptyInputModalMessage: _getEmptyInputModalMessage
  };
})();
