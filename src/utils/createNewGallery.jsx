import Parse from "parse";

async function createNewGallery(parseGarden, title) {

    const Gallery = Parse.Object.extend('Gallery');
    const myGallery = new Gallery();

    myGallery.set('title',title);
    myGallery.set('gan', parseGarden);

    const res = await myGallery.save();
    
    return res;
}

export default createNewGallery;