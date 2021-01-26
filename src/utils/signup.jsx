import Parse from 'parse';

async function signup(email, pwd, role, fname, lname, gardenId) {
    const parseGarden = await new Parse.Query(new Parse.Object.extend('Gan')).get(gardenId);
    const user = new Parse.User()    

    user.set('username', email);
    user.set('email', email);
    user.set('role', 'manager');
    user.set('gan', parseGarden);
    user.set('fname', fname);
    role === 'manager' && user.set('lname', lname);
    user.set('password', pwd);
    
    const res = await user.signUp();
    console.log(res);
    return res;
}

export default signup;