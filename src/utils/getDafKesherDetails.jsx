import Parse from 'parse';
import getHebrewDate from './getHebrewDate';

async function getDafKesherDetails(dafKesherId) {
    const DafKesher = await new Parse.Query(new Parse.Object.extend('DafKesher')).get(dafKesherId);
    const data = await DafKesher.get('data');
    const title = await DafKesher.get('title');
    const hebDate = await getHebrewDate(DafKesher.get('date'));


    return ({'parseDafKesher':DafKesher, 'data':data, 'title':title, 'hebDate':hebDate})
}

export default getDafKesherDetails;