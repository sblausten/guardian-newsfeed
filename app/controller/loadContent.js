//const Articles = require('../models/articles.js');
//const getContent = require('../services/getContent.js');
//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var articleList = new Articles();
var headlinesRequestUrl =
"http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news&from-date=2017-05-26?show-fields=header";


var fetchContent = function (apiRequestUrl, resultsAttribute, callback) {
		var attributeArray = [];
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
        	var resultsArray;
        	resultsArray = JSON.parse(xhr.response).response.results;
	        var length = resultsArray.length;
	        for (var i = 0; i < length; i++) {
	            attributeArray.push(resultsArray[i][resultsAttribute]);
	        }
	        callback(null, attributeArray);
        };
        console.log(xhr);
        xhr.open("GET", apiRequestUrl, true);
        xhr.onerror = function (err) {
        	console.log("xml request error");
			callback(err);
		};
        xhr.send();
};

var fetchContentAsPromised = function (apiRequestUrl, resultsAttribute) {
	return new Promise(function (resolve, reject) {
		fetchContent(apiRequestUrl, resultsAttribute, function(err, data){
			if (err) {
				console.log("error caught in fetchContentAsPromised if");
				return reject(err);
			}
			resolve(data);
		});
	});
};

fetchContentAsPromised(headlinesRequestUrl, 'webTitle')
	.then(function(data) { console.log(headlinesArray = data); }, 
		function(rejection) { console.log(rejection); })
	.then(headlines)
	.catch( function(err) { console.log(err); } );

