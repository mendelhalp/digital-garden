import Parse from "parse";

async function createNewDafKesher(parseGarden, title, date) {

    const DafKesher = Parse.Object.extend('DafKesher');
    const myNewDafKesher = new DafKesher();

    myNewDafKesher.set('title',title);
    myNewDafKesher.set('gan', parseGarden);
    myNewDafKesher.set('date', new Date(date));
    myNewDafKesher.set('data', {"studyTopics":[], "messages":[]});

    const res = await myNewDafKesher.save();
    
    return res;
}

export default createNewDafKesher;