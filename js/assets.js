var canvasBgImage = new Image(),
    bgPattern;
canvasBgImage.onload = function () {
  this.loaded = true;
  bgPattern = ctx.createPattern(canvasBgImage, 'repeat');
};
canvasBgImage.src = "assets/images/tile.png";

var ballBgImage = new Image();
ballBgImage.loaded = false; // custom flag
ballBgImage.onload = function () {
  this.loaded = true;
};
ballBgImage.src = "assets/images/donut.png";
