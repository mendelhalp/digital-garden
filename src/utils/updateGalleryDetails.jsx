import Parse from "parse";

async function updateGalleryDetails(galleryId, title) {

    const Gallery = Parse.Object.extend('Gallery');
    const query = new Parse.Query(Gallery);

    const gallery = await query.get(galleryId);
    gallery.set('title', title);
    const res = await gallery.save();
    
    return res;

}

export default updateGalleryDetails;