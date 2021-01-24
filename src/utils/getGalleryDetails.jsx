import Parse from 'parse';
import getGalleryMainImg from './getGalleryMainImg';

async function getGalleryDetails(galleryId) {

    const Gallery = await new Parse.Query(new Parse.Object.extend('Gallery')).get(galleryId);
    const galleryName = Gallery.get('title');
    const galleryMainImg = await getGalleryMainImg(galleryId);

    return ({'parseGallery':Gallery, 'title':galleryName, 'mainImg': galleryMainImg});
}
export default getGalleryDetails;