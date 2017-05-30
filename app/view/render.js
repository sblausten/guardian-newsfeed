
var renderHeadlines = function(headlinesArray) {

	var printHeadline = function(index) {
	    insertLi(createLi(getText(index), index));
	};

	var getText = function(index) {
	    return document.createTextNode(headlinesArray[index]);
	};

	var createLi = function(text, index) {
		var li = document.createElement('li');
		li.id = "article_" + index;
		li.appendChild(text);
	    return li;
	};

	var insertLi = function(li) {
		document
	        .getElementById('headlines')
	        .appendChild(li);
	};



	var addlink = function(index) {
		prependLink(createAnchor(getAddress()), index)
	}

	var getAddress = function() {
		return 'http://www.theguardian.com/' + articles.getArticles[i].id;
	}

	var createAnchor = function(address) {
		return document
			.createElement('a')
			.setAttribute('href', address)
	}

	var prependLink = function(linkAnchor, index) {
		document
			.getElementById("article_" + index)
			.prepend(linkAnchor);
	}

	for (var i = 0; i < headlinesArray.length; i++) {
    	printHeadline(i);
    	addLink(i);
	}
};


var renderSummary = function(index, summaryText) {
	
	var createText = function(index) {
		return document.createTextNode(summaryText);
	};

	var insertSummary = function(index) {
		return document
			.getElementById("article_" + index)
			.createElement("p")
			.appendChild(createText(index));
	};

	insertSummary(index);

}

