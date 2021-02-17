import Parse from "parse";

async function deleteGallery(galleryId) {

    const Gallery = Parse.Object.extend('Gallery');
    const query = new Parse.Query(Gallery);

    const gallery = await query.get(galleryId);
    const res = await gallery.destroy();

    return res;
}

export default deleteGallery;