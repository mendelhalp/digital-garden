import Parse from "parse";

async function createNewGallery(parseGarden, title) {

    const Gallery = Parse.Object.extend('Gallery');
    const myGallery = new Gallery();

    myGallery.set('title',title);
    myGallery.set('gan', parseGarden);

    myGallery.save().then(
    (result) => {
        // console.log('Gallery created', result);
    },
    (error) => {
        // console.error('Error while creating Gallery: ', error);
    }
    );
    
    return '';
}

export default createNewGallery;