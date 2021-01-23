import Parse from "parse";

async function updateDafKesherDetails(dafKesherId, title, date) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const query = new Parse.Query(DafKesher);

    query.get(dafKesherId).then((dafKesher) => {
        dafKesher.set('title', title);
        dafKesher.set('date', new Date(date));
        dafKesher.save().then(
            (result) => {
                console.log('DafKesher updated');
            },
            (error) => {
                console.error('Error while updating DafKesher: ', error);
            }

        );

        
        
    });
    return '';
}

export default updateDafKesherDetails;