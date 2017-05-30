function Article(articleJson) {
    this.id = articleJson.id;
    this.headline = articleJson.webTitle;
    this.webUrl = articleJson.webUrl;
    this.apiUrl = articleJson.apiUrl;
    saveArticle();
}

Article.prototype.saveArticle = function() {
	guardianArticles.updateArticles(this);
};

return Article;