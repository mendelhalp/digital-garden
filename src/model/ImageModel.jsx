class ImageModel {
    constructor(parseImage){
        this.id = parseImage.id;
        this.url = parseImage.get('file')._url;
    }
}

export default ImageModel;