import Parse from 'parse';


async function getGalleryMainImg(galleryId) {
    
    const galleryQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    const parseGallery = await galleryQuery.get(galleryId);
    
    const query = new Parse.Query(Parse.Object.extend('Image'));
    query.equalTo('gallery', parseGallery);
    const numOfImgs = await query.count();                                  // saving the amount of photos in the gallery
    const fullResult = await query.find();                                  // saving all the images of the gallery
    query.equalTo('isPrimary', true);
    const result = await query.find();                                      // finding the primary image of the gallery

    let mainImgUrl;
    if (result[0]) {
        mainImgUrl = result[0].get('file')._url;                            // if primary image of the gallery found - saving its url
    } else if (fullResult && numOfImgs > 0) {                               // if no primary image of the gallery found & images existing - saving random url
        mainImgUrl = fullResult[Math.floor(Math.random() * numOfImgs)].get('file')._url;
    } else {
        const parseGan = parseGallery.get('gan');                           // if no primary image of the gallery found & no images existing - use garden logo
        const ganLogo = parseGan.get('logo')._url;
        
        mainImgUrl = ganLogo;
    }

    return (mainImgUrl);

}


export default getGalleryMainImg;