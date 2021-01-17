import Parse from 'parse';


async function getGalleryMainImg(galleryId) {
    
    const galleryQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    const parseGallery = await galleryQuery.get(galleryId);
    
    const query = new Parse.Query(Parse.Object.extend('Image'));
    query.equalTo('gallery', parseGallery);
    query.equalTo('isPrimary', true);
    const result = await query.find();

    const mainImgUrl = result[0] ? result[0].get('file')._url : null;

    console.log(mainImgUrl);
    return (mainImgUrl);

}


export default getGalleryMainImg;