class GalleryModel {
    constructor(parseGallery){
        this.id = parseGallery.id;
        this.title = parseGallery.get('title');
        this.parseGallery = parseGallery;
    }
}

export default GalleryModel;