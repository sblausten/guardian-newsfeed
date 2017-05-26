
var apiRequestUrl =
"http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news&from-date=2017-05-26?show-fields=header";

var articleList = new Articles();
requestAPI(apiRequestUrl);

function requestAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiRequestUrl, false);
  xhr.send();
  var array = JSON.parse(xhr.response).response.results;
  var length = array.length;
  for (var i = 0; i < length; i++) {
  	articleList.saveArticle(array[i].webTitle);
	};
}
