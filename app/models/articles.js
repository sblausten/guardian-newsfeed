function Articles(){
  this.articles = [];
}

Articles.prototype.updateArticles = function (article) {
	this.articles.push(article);
};

Articles.prototype.getArticles = function () {
	return this.articles;
};

return Articles;
