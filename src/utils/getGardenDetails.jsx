import Parse from 'parse';

async function getGardenDetails(activeUser) {
    const parseGan = await new Parse.Query(new Parse.Object.extend('Gan')).get(activeUser.gardenId);
    const ganName = parseGan.get('name');
    const ganLogo = parseGan.get('logo')._url;
    const ganYear = parseGan.get('year');

    const gardenDetails = {
        'parseGarden':parseGan,
        'id':parseGan.id,
        'name':ganName,
        'logo':ganLogo,
        'year':ganYear
    }
    return (gardenDetails);
}

export default getGardenDetails;