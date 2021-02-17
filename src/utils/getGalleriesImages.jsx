import Parse from 'parse';
import ImageModel from '../model/ImageModel';

async function getGalleriesImages(galleries) {

    const imagesArr = await Promise.all(Object.values(galleries).map(async gallery => {

        const imgQuery = new Parse.Query(Parse.Object.extend('Image'));
        imgQuery.equalTo("gallery", gallery.parseGallery);
        
        const results = await imgQuery.find();
        const imagesArr = results.map(image => new ImageModel(image));
        
        const imagesObj = imagesArr.reduce((image, item) => {
            return {
                ...image,
                [item['id']]: item,
              };
        }, {});

        return {'id':gallery.id, 'images':imagesObj};
    }));
    
    const galleriesImagesObj = imagesArr.reduce((gallery, item) => {
        return {
            ...gallery,
            [item['id']]: item,
        };
    }, {});
    
    return (galleriesImagesObj);


}
export default getGalleriesImages;