const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();  //new instance
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);  //verify the object
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

    it('should return names for react course', () => {
      var userList = users.getUserList('React Course');

      expect(userList).toEqual(['Jen']);
    });

    it('should getUser of that id', () => {
      var oneUser = users.getUser('2');
      expect(oneUser).toEqual({
        id: '2',
        name: 'Jen',
        room: 'React Course'
      });
    });

    it('should not getUser of the false id', () => {
      var oneUser = users.getUser('44');
      expect(oneUser).toBeFalsy();
    });

    it('should removeUser of that id', () => {
      var removedUser = users.removeUser('1');
      expect(removedUser).toEqual({
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      });
      expect(users).not.toContain({
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      });
    });

    it('should not removeUser of the false id', () => {
      var removedUser = users.removeUser('55');
      expect(removedUser).toBeFalsy();
    });
});
