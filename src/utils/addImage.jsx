import Parse from 'parse';
import getGalleryDetails from './getGalleryDetails';

async function addImage(image, galleryId) {
    const parseGallery = (await getGalleryDetails(galleryId)).parseGallery;
    
    const Image = Parse.Object.extend('Image');
    const myNewImage = new Image();
    
    myNewImage.set('file', new Parse.File(image.name, image));
    
    // myNewImage.set('isPrimary', true);
    myNewImage.set('gallery', parseGallery);
    
    const response = await myNewImage.save();
    
    return response;
}

export default addImage;