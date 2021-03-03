import Parse from "parse";

async function updateGalleryDetails(galleryId, title, isReady) {

    const Gallery = Parse.Object.extend('Gallery');
    const query = new Parse.Query(Gallery);

    const gallery = await query.get(galleryId);
    gallery.set('title', title);
    gallery.set('isReady', isReady);
    const res = await gallery.save();
    
    return res;

}

export default updateGalleryDetails;