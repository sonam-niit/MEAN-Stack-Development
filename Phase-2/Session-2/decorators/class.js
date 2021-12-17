var User = /** @class */ (function () {
    function User(id, name) {
        this.userId = id;
        this.userName = name;
    }
    User.prototype.display = function () {
        console.log("Id: " + this.userId);
        console.log("Nmae: " + this.userName);
    };
    return User;
}());
var user1 = new User(101, 'Sonam Soni');
user1.display();
var user2 = new User(102, 'Akshita');
user2.display();
