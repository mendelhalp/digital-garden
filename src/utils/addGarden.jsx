import Parse from 'parse';

async function addGarden(name, year, logo) {
    const Gan = Parse.Object.extend('Gan');
    const myNewGarden = new Gan();

    myNewGarden.set('name', name);
    myNewGarden.set('year', year);
    myNewGarden.set('logo', new Parse.File(logo.name, logo));
    
    const response = await myNewGarden.save();
    
    return response;
}

export default addGarden;