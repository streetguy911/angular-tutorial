'use strict';

let user = {
  username: 'telndima',
  acl: ['USER', 'ADMIN']
};

export default class UserService {
    constructor (appConfig, $http, $q) {
      this.appConfig = appConfig;
      this.$http = $http;
      this.$q = $q;

    }
    getUser () {
        return user;
    }

    signIn(user){
      let dfd = this.$q.defer();


      this.$http.post(this.appConfig.api.auth.signin, user).then((response)=>{
        console.log(response);
        if (response.data.success) {
          console.log('response.success');
          this.setToken(response.data.token);
          dfd.resolve(true);
        } else {
          console.log('!response.success');
          dfd.reject(response.data);
        };

      });

      return dfd.promise;
    }

    setToken(token){
      this.$http.defaults.headers.common['x-access-token'] = token;
    }

}
