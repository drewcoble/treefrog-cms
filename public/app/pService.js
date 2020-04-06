var PRACTICE_SERVICE = (function() {
  var _db;

  var _getAllData = function(callback) {
    _db
      .collection("Pages")
      .get()
      .then(function(querySnapshot) {
        callback(querySnapshot);
      });
  };

  var _updateData = function(id, newContent, callback) {
    var newObj = { navName: newContent };

    _db
      .collection("Pages")
      .doc(id)
      .update(newObj)
      .then(function() {
        _getAllData(callback);
      });
  };

  var _deleteData = function(id, callback) {
    _db
      .collection("Pages")
      .doc(id)
      .delete()
      .then(function() {
        _getAllData(callback);
      });
  };

  var _addData = function(navName, callback) {
    // add loading screen right here  later if you want

    let pageFakeData = {
      navName: navName,
      content: "<h1>" + navName + "</h1>",
      subNavs: []
    };

    _db
      .collection("Pages")
      .add(pageFakeData)
      .then(function(docRef) {
        //remove loading screen
        console.log("Document written with ID: ", docRef.id);
        callback("New Nav successfully added");
      })
      .catch(function(error) {
        //remove loading screen
        //add alert for error
        console.error("Error adding document: ", error);
      });
  };

  var _checkPages = function(mainNavName, callback) {
    var pages = _db.collection("Pages");
    pages
      .where("navName", "==", mainNavName)
      .get()
      .then(function(querySnapshot) {
        // console.log("querySnapshot ", querySnapshot.empty);
        if (querySnapshot.empty) {
          // console.log("add new name");
          _addData(mainNavName, callback);
        } else {
          // console.log("duplicate");
          callback("Duplicate");
        }
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  var _initFirebase = function(callback) {
    // initiate connection to firebase
    firebase
      .auth()
      .signInAnonymously()
      .then(function(result) {
        console.log("connected to firebase");
        _db = firebase.firestore();
        //once firebase is connected, init buttons through callback function
        callback();
      });
  };

  return {
    addData: _addData,
    checkPages: _checkPages,
    initFirebase: _initFirebase,
    getAllData: _getAllData,
    updateData: _updateData,
    deleteData: _deleteData
  };
})();
