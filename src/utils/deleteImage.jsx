import Parse from "parse";

async function deleteImage(imageId) {

    const Image = Parse.Object.extend('Image');
    const query = new Parse.Query(Image);

    query.get(imageId).then((image) => {
        image.destroy().then(
            (image) => {
                // console.log('Image destroyed');
            },
            (error) => {
                // console.error('Error while destroying Image: ', error);
            }

        );

        
        
    });
    return '';
}

export default deleteImage;