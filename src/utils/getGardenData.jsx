import Parse from 'parse';
import getHebrewDate from './getHebrewDate';

async function getGardenData(parseGarden) {
    const galleriesQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    const dapeyKesherQuery = new Parse.Query(Parse.Object.extend('DafKesher'));
    galleriesQuery.equalTo("gan", parseGarden);
    dapeyKesherQuery.equalTo("gan", parseGarden);
    dapeyKesherQuery.descending("date");

    const galleriesResults = await galleriesQuery.find();
    const dapeyKesherResults = await dapeyKesherQuery.find();

    const galleries = galleriesResults.map(gallery => {
        return(
            {
            'id':gallery.id,
            'title':gallery.get('title')
            }
        )
    });
    const dapeyKesher = dapeyKesherResults.map(dafKesher => {
        return(
            {
            'id':dafKesher.id,
            'title': dafKesher.get('title'),
            'date':dafKesher.get('date'),
            'hebDate':getHebrewDate(dafKesher.get('date'))
            }
        )
    });
    
    return {galleries, dapeyKesher};
}

export default getGardenData;