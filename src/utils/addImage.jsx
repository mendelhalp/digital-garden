import Parse from 'parse';

async function addImage(image, galleryId) {
    const parseGallery = await new Parse.Query(new Parse.Object.extend('Gallery')).get(galleryId);
    
    const Image = Parse.Object.extend('Image');
    const myNewImage = new Image();
    
    myNewImage.set('file', new Parse.File(image.name, image));
    
    // myNewImage.set('isPrimary', true);
    myNewImage.set('gallery', parseGallery);
    
    const response = await myNewImage.save();
    
    return response;
}

export default addImage;