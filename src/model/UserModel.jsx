class UserModel {
    constructor(parseUser){
        this.id = parseUser.id;
        this.mail = parseUser.get('username');
        this.fname = parseUser.get('fname');
        this.lname = parseUser.get('lname');
        this.gardenId = parseUser.get('gan').id;
        this.role = parseUser.get('role');
    }
}

export default UserModel;