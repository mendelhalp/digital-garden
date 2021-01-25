import Parse from 'parse';

async function getGardenDetails(activeUser) {
    const parseUser = await new Parse.Query(new Parse.User()).get(activeUser.id);
    const parseGan = await new Parse.Query(new Parse.Object.extend('Gan')).get(parseUser.get('gan').id);
    const ganName = parseGan.get('name');
    const ganLogo = parseGan.get('logo')._url;

    const gardenDetails = {
        'parseGarden':parseGan,
        'id':parseGan.id,
        'name':ganName,
        'logo':ganLogo
    }
    return (gardenDetails);
}

export default getGardenDetails;