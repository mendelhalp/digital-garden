import Parse from "parse";

async function deleteGallery(galleryId) {

    const Gallery = Parse.Object.extend('Gallery');
    const query = new Parse.Query(Gallery);

    query.get(galleryId).then((gallery) => {
        gallery.destroy().then(
            (gallery) => {
                // console.log('Gallery destroyed');
            },
            (error) => {
                // console.error('Error while destroying Gallery: ', error);
            }

        );

        
        
    });
    return '';
}

export default deleteGallery;