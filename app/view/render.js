(function() {

  var printHeadline = function(index) {
    insertLi(createLi(getText(index)));
  };

  var getText = function(index) {
    return document.createTextNode(guardianArticleTitles[index]);
  };

  var createLi = function(text) {
    var li = document.createElement('li');
    li.appendChild(text);
    return li;
  };

  var insertLi = function(li) {
    document
      .getElementById('headlines')
      .appendChild(li);
  };

  var guardianArticleTitles;
  requestAPI(apiRequestUrl);
  for (var i = 0; i < guardianArticleTitles.length; i++) {
    printHeadline(i);
  }

})();
