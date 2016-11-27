'use strict';

let user = {
  username: 'telndima',
  acl: ['USER', 'ADMIN']
};

export default class UserService {
    constructor () {

    }
    getUser () {
        return user;
    }

}
