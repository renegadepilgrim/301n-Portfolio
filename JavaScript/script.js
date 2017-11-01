//Setting up the constructor for adding blog submissions. This page will be an admin page that only the website owner will have access to.//

var blogSubmissions = [];

function Blog (rawDataObj) {
  this.author = rawDataObj.author;
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}
