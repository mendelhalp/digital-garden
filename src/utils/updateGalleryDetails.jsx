import Parse from "parse";

async function updateGalleryDetails(galleryId, title, date) {

    const Gallery = Parse.Object.extend('Gallery');
    const query = new Parse.Query(Gallery);

    query.get(galleryId).then((gallery) => {
        gallery.set('title', title);
        gallery.save().then(
            (result) => {
                // console.log('Gallery updated');
            },
            (error) => {
                // console.error('Error while updating Gallery: ', error);
            }

        );

        
        
    });
    return '';
}

export default updateGalleryDetails;