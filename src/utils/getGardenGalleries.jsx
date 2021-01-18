import Parse from 'parse';
import getGalleryDetails from './getGalleryDetails';

async function getGardenGalleries(ganId) {
    
    const Gan = await new Parse.Query(new Parse.Object.extend('Gan')).get(ganId);
    const galleriesQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    galleriesQuery.equalTo("gan", Gan);

    const results = await galleriesQuery.find();

    const galleries = results.map(async gallery => await getGalleryDetails(gallery.id));

    return (galleries);
}
export default getGardenGalleries;