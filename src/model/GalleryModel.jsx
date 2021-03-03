class GalleryModel {
    constructor(parseGallery){
        this.id = parseGallery.id;
        this.title = parseGallery.get('title');
        this.isReady = parseGallery.get('isReady');
        this.parseGallery = parseGallery;
    }
}

export default GalleryModel;