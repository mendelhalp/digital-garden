import getHebrewDate from "../utils/getHebrewDate";

class DafKesherModel {
    constructor(parseDafKesher){
        this.id = parseDafKesher.id;
        this.title = parseDafKesher.get('title');
        this.date = parseDafKesher.get('date');
        this.data = parseDafKesher.get('data');
        this.hebDate = getHebrewDate(parseDafKesher.get('date'));
    }
}

export default DafKesherModel;