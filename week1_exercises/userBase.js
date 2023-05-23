class UserBase {
    constructor(names) {
        this.names = names;
    }

    count() {
        return this.names.length;
    }

    getNames() {
        return this.names.map((user) => {
            return user.getName()
        })
    }

    getIntroduction() {
        return `Hi my name is ${this.names}`;
    }
};

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];


module.exports = UserBase;