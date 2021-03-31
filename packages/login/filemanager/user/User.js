// Serves as a class blueprint so we can make User objects later to store all the info of the users.

class User {

    constructor(username, password)
    {
        this.username = username;
        this.password = password;
    }


    getUsername()
    {
        return this.username;
    }

    setUsername(username)
    {
        this.username = username;
    }

    getPassword()
    {
        return this.password;
    }

    setPassword(password)
    {
        this.password = password;
    }
}

module.exports = User;