import Parse from "parse";

async function deleteDafKesher(dafKesherId) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const query = new Parse.Query(DafKesher);

    const dafKesher = await query.get(dafKesherId);
    const res = await dafKesher.destroy();

    return res;
}

export default deleteDafKesher;