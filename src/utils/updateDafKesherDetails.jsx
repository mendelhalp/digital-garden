import Parse from "parse";

async function updateDafKesherDetails(dafKesherId, title, date, isReady) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const query = new Parse.Query(DafKesher);

    const dafKesher = await query.get(dafKesherId);
    dafKesher.set('title', title);
    dafKesher.set('date', new Date(date));
    dafKesher.set('isReady', isReady);
    const res = await dafKesher.save();    

    return res;
    
}

export default updateDafKesherDetails;