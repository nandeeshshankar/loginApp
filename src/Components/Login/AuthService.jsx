export const AuthService = {
    checkAuth: function(email, password) {
    var userMails = ['iamtestUser@gmail.com', 'testemail2022@gmail.com', 'reactuser2022@gmail.com'];
    var passwords = ['Test@1234', 'Pass@2022', 'Feb@2022'];
    for (var i = 0; i < userMails.length; i++){
        if (email == userMails[i] && password == passwords[i]) {
        return "Successfully Authenticated";
        }
    }
    return "Invalid Credentials. Try again!";
    }
};