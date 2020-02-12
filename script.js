class User {
    constructor(email , name){
        this.email = email;
        this.name = name;
        this.score = 0
    }
    login(){
        console.log(this.email, "just logged in");
        return this
    }
    logout(){
        console.log(this.email, "just logged out");
        return this
    }
    updateScore(){
        this.score++;
        console.log(this.email,"score is now", this.score);
        return this;        
    }
}

class Admin extends User {
    deleteUser(user){
        users =users.filter(u => {
            return u.email != user.email;
        })
    }
}
var userOne = new User("dac.unruly.com", "MrEveryGyalMan")
var userTwo = new User("calli.unruly.com", "Joe Grind")
var admin = new Admin("demdead.unruly.com", "UnrulyBoss")

var users = [userOne, userTwo]
console.log(users);

admin.deleteUser(userTwo)

console.log(users);

