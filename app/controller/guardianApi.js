var apiRequestUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=header";

var articleList = new Articles();
requestAPI(apiRequestUrl);

function requestAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiRequestUrl, false);
  xhr.send();
  articleList.saveArticle(JSON.parse(xhr.response).response.content.webTitle);
}
