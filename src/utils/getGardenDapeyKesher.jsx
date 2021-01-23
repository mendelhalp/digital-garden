import Parse from 'parse';
import getHebrewDate from './getHebrewDate';

async function getGardenDapeyKesher(ganId) {

    const Gan = await new Parse.Query(new Parse.Object.extend('Gan')).get(ganId);
    const dapeyKesherQuery = new Parse.Query(Parse.Object.extend('DafKesher'));
    dapeyKesherQuery.equalTo("gan", Gan);
    dapeyKesherQuery.descending("date");

    const results = await dapeyKesherQuery.find();

    const dapeyKesher = results.map(dafKesher => {
        return({
            'id':dafKesher.id,
            'title': dafKesher.get('title'),
            'date':dafKesher.get('date'),
            'hebDate':getHebrewDate(dafKesher.get('date'))
        })
    });

    return (dapeyKesher);
}
export default getGardenDapeyKesher;