import Parse from 'parse';
import DafKesherModel from '../model/DafKesherModel';
import GalleryModel from '../model/GalleryModel';

async function getGardenData(parseGarden, role) {
    const galleriesQuery = new Parse.Query(Parse.Object.extend('Gallery'));
    const dapeyKesherQuery = new Parse.Query(Parse.Object.extend('DafKesher'));
    galleriesQuery.equalTo("gan", parseGarden);
    dapeyKesherQuery.equalTo("gan", parseGarden);

    const galleriesResults = await galleriesQuery.find();
    const dapeyKesherResults = await dapeyKesherQuery.find();

    let galleriesArr = galleriesResults.map(gallery => new GalleryModel(gallery));
    let dapeyKesherArr = dapeyKesherResults.map(dafKesher => new DafKesherModel(dafKesher));

    if (role !== 'manager'){
        galleriesArr = galleriesArr.filter(gallery => gallery.isReady);
        dapeyKesherArr = dapeyKesherArr.filter(dafKesher => dafKesher.isReady);
    }

    const galleries = galleriesArr.reduce((gallery, item) => {
        return {
            ...gallery,
            [item['id']]: item,
          };
    }, {});
    const dapeyKesher = dapeyKesherArr.reduce((dafKesher, item) => {
        return {
            ...dafKesher,
            [item['id']]: item,
          };
    }, {});
    
    return {galleries, dapeyKesher};
}

export default getGardenData;