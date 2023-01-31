interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
}

class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const use: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
    return user;
}

function deleteUser(user: User) {

}

type WindowStates = 'open' | "closed";

const w: WindowStates = 'open'
