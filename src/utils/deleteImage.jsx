import Parse from "parse";

async function deleteImage(imageId) {

    const Image = Parse.Object.extend('Image');
    const query = new Parse.Query(Image);

    const image = await query.get(imageId);
    const res = await image.destroy();

    return res;
}

export default deleteImage;