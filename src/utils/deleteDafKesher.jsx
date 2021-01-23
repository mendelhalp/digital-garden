import Parse from "parse";

async function deleteDafKesher(dafKesherId) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const query = new Parse.Query(DafKesher);

    query.get(dafKesherId).then((dafKesher) => {
        dafKesher.destroy().then(
            (dafKesher) => {
                console.log('DafKesher destroyed');
            },
            (error) => {
                console.error('Error while destroying DafKesher: ', error);
            }

        );

        
        
    });
    return '';
}

export default deleteDafKesher;