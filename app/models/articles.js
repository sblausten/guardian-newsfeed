function Articles(){
  this.articles = [];
}

  Articles.prototype.saveArticle = function (article) {
    this.articles.push(article);
  };
