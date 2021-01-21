import Parse from 'parse';
import getHebrewDate from './getHebrewDate';

async function getDafKesherDetails(dafKesherId) {
    const DafKesher = await new Parse.Query(new Parse.Object.extend('DafKesher')).get(dafKesherId);
    const data = DafKesher.get('data');
    const title = DafKesher.get('title');
    const hebDate = getHebrewDate(DafKesher.get('date'));


    return ({'parseDafKesher':DafKesher, 'data':data, 'title':title, 'hebDate':hebDate})
}

export default getDafKesherDetails;