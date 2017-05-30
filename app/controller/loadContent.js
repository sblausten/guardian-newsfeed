//const Articles = require('../models/articles.js');
//const getContent = require('../services/getContent.js');
//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
'use strict';

var articles = new Articles();
var homepageRequestUrl =
"http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news&from-date=2017-05-26?show-fields=header";


var fetchContent = function (apiRequestUrl, resultsProcessor, callback) {
		var processedData;
		var responseData;
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
        	responseData = JSON.parse(xhr.response);
        	resultsProcessor(responseData);
	        callback(null, responseData);
        };
        xhr.open("GET", apiRequestUrl, true);
        xhr.onerror = function (err) {
        	console.log("xml request error");
			callback(err);
		};
        xhr.send();
};

var fetchContentAsPromised = function (apiRequestUrl, resultsProcessor) {
	return new Promise(function (resolve, reject) {
		fetchContent(apiRequestUrl, resultsProcessor, function(err, data){
			if (err) {
				console.log("error caught in fetchContentAsPromised if");
				return reject(err);
			}
			resolve(data);
		});
	});
};

var saveArticles = function(jsonData) {
	var homepageArticles = jsonData.response.results;
	var length = homepageArticles.length;
    for (var i = 0; i < length; i++) {
    	new Article(homepageArticles[i]);
    }
};

// var getHeadlines = function() {
// 	var headlinesArray = [];
// 	var length = articles.length;
//     for (var i = 0; i < length; i++) {
//         headlinesArray.push(articles.getArticles[i].webTitle);
//     }
//     return headlinesArray;
// };

var fetchSummaries = function() {
	var length = articles.length;
	for (var i = 0; i < length; i++) {
		var summary;
        var address = 'http://www.theguardian.com/' + articles.getArticles[i].id;
        var apiRequestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + address;
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			summaryText = JSON.parse(xhr.response).sentences.join(" ");
			renderSummary(i, summaryText);
		};
		xhr.open("GET", apiRequestUrl, true);
		xhr.send();
    }
};



fetchContentAsPromised(homepageRequestUrl, saveArticles)
	.then(function() { renderHeadlines(getHeadlines()); }, 
		function(rejection) { console.log(rejection); })
	.then(fetchSummaries())
	.catch( function(err) { console.log(err); } );

