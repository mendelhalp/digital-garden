import Parse from 'parse';

async function getGardenGalleries(ganId) {
    const Gan = await new Parse.Query(new Parse.Object.extend('Gan')).get(ganId);
    const galleriesQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    galleriesQuery.equalTo("gan", Gan);

    const results = await galleriesQuery.find();

    const galleries = results.map(gallery => {
        return({
            'id':gallery.id,
            'title':gallery.get('title')
        })
    });

    return (galleries);
}
export default getGardenGalleries;