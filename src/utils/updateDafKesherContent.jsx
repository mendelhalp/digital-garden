import Parse from "parse";

async function updateDafKesherContent(dafKesherId, content) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const query = new Parse.Query(DafKesher);

    query.get(dafKesherId).then((dafKesher) => {
        dafKesher.set('data', content);
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

export default updateDafKesherContent;