function validate(username, password){
    return password.indexOf('||') > -1 || password.indexOf('//') > -1 ? "Wrong username or password!" : new Database().login(username, password);
}