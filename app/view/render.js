(function() {

  var printHeadline = function(index) {
    insertLi(createLi(getText(index)));
  };

  var getText = function(index) {
    return document.createTextNode(headlinesArray[index]);
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

  for (var i = 0; i < headlinesArray.length; i++) {
    printHeadline(i);
  }

})();
