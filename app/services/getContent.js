
function fetchContent(apiRequestUrl, resultsAttribute, callback) {
		var attributeArray = [];
        var xhr = new XMLHttpRequest();
        console.log("got here")
        xhr.open("GET", apiRequestUrl, true);
        xhr.onload = function() {
        	var resultsArray = JSON.parse(xhr.response).response.results;
	        var length = array.length;
	        for (var i = 0; i < length; i++) {
	            attributeArray.push(resultsArray[i][resultsAttribute]);
	        }
	        console.log("got to callback execution");
	        callback(none, attributeArray);
        };
        xhr.onerror = function () {
        	console.log("xml request error");
			callback(err);
		};
        xhr.send();
        if (xhr.status === 200) {
		  console.log(xhr.responseText);
		  console.log(attributeArray);
		}
}

exports.fetchContentAsPromised = function (apiRequestUrl, resultsAttribute) {
	return new Promise( function(resolve, reject) {
		fetchContent(apiRequestUrl, resultsAttribute, function(err, data){
			if (err) {
				return reject(err);
			}
			resolve(data);
		});
	});
};

