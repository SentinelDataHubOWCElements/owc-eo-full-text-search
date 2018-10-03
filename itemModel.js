    //MODEL used for search
    class ItemModel {
      constructor(title, thumb, thumbUrl, url, attributes) {
        this.title = title;
        this.thumb = thumb;
        this.thumbUrl = thumbUrl;
        this.url = url; //used for baseUrl
        this.attributes = attributes;
      }
    }