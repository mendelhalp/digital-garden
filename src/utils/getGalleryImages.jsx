import Parse from 'parse';

async function getGalleryImages(galleryId) {

    const Gallery = await new Parse.Query(new Parse.Object.extend('Gallery')).get(galleryId);
    const imgQuery = new Parse.Query(Parse.Object.extend('Image'));
    imgQuery.equalTo("gallery", Gallery);

    const results = await imgQuery.find();

    const images = results.map(image => {
        const desc = image.get('desc') ? image.get('desc') : '';
        const url = image.get('file')._url;
        const id = image.id;

        return({
            'id':id,
            'desc':desc,
            'url':url
        })
    });

    return (images);
}
export default getGalleryImages;