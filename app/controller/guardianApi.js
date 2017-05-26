var apiRequestUrl =
"http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news&from-date=2017-05-26?show-fields=header";

var articleList = new Articles();
requestAPI(apiRequestUrl);

function requestAPI() {
  var articleSummary;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiRequestUrl, false);
  xhr.send();
  guardianArticles = JSON.parse(xhr.response).response.results;
  var length = guardianArticles.length;
  for (var i = 0; i < length; i++) {
    console.log(guardianArticles[i]);
    var address = 'http://www.theguardian.com/' + guardianArticles[i].id;
    document.getElementById('headlines').insertAdjacentHTML('afterbegin', '<li id="' + i + '"><a href=' + address + '>' + guardianArticles[i].webTitle + '</a><br></li>');
    requestSummary(address);
    document.getElementById(i).insertAdjacentHTML('beforeend', requestSummary(address));
  }
}
function requestSummary(address) {
  var apiRequestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + address;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiRequestUrl, false);
  xhr.send();
  return (JSON.parse(xhr.response).sentences.join(" "));
}
//  var xhr = new XMLHttpRequest();
 // xhr.open("GET", 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://www.theguardian.com/' + guardianArticles[i].id, false);

//  xhr.send();
//  JSON.parse(xhr.response).response.results;
