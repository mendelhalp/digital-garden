import Parse from 'parse';


async function getGalleryMainImg(galleryId) {
    
    const galleryQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    const parseGallery = await galleryQuery.get(galleryId);
    
    const query = new Parse.Query(Parse.Object.extend('Image'));
    query.equalTo('gallery', parseGallery);
    const numOfImgs = await query.count();
    const fullResult = await query.find();
    query.equalTo('isPrimary', true);
    const result = await query.find();

    let mainImgUrl;
    if (result[0]) {
        mainImgUrl = await result[0].get('file')._url;
    } else if (fullResult && numOfImgs > 0) {
        mainImgUrl = await fullResult[Math.floor(Math.random() * numOfImgs)].get('file')._url;
    } else {
        const parseGan = await parseGallery.get('gan');
        const ganLogo = await parseGan.get('logo')._url;
        
        mainImgUrl = ganLogo;
    }

    return (mainImgUrl);

}


export default getGalleryMainImg;