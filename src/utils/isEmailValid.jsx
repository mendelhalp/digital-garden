
function isEmailValid(email) {
    return /.+@.+\..+/.test(email)
}

export default isEmailValid;