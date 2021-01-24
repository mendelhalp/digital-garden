import Parse from "parse";

async function createNewDafKesher(parseGarden, title, date) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const myNewDafKesher = new DafKesher();

    myNewDafKesher.set('title',title);
    myNewDafKesher.set('gan', parseGarden);
    myNewDafKesher.set('date', new Date(date));
    myNewDafKesher.set('data', {"studyTopics":[], "messages":[]});

    myNewDafKesher.save().then(
    (result) => {
        console.log('DafKesher created', result);
    },
    (error) => {
        console.error('Error while creating DafKesher: ', error);
    }
    );
    
    return '';
}

export default createNewDafKesher;