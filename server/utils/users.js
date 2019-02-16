[{
  id: '/#12poiajdspfoif',
  name: 'Andrew',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    // return user that was removed
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    console.log(this.users);
    return user;
  }

  getUser (id) {
    var user = this.users.filter((user) => user.id === id)[0];
    // console.log(user);
    return user;
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};

// var users = [];
// var addUser = (id, name, room) => {
//   users.push({})
// }
// module.export = {addUser}

// this refers to instance
// this keyword binds the property
// use it while making the class constructor

// class Person {
//   //constructor
//   constructor (name, age) {
//     // console.log(name, age);
//     this.name = name;
//     this.age = age + 2;
//     this.sex = "male";
//   }
//   //method
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Andrew', 25);
//
// console.log('this.age', me.name);
// console.log('this.age', me.age);
// console.log(me.sex);
//
// var description = me.getUserDescription();
// console.log(description);
