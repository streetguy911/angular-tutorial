'use strict';

export default class SignInController {

    constructor (userService, $state) {
        this.userService = userService;
        this.$state = $state;
        this.user = {};
    }

    signin(){
      console.log(this.user);
      let user = this.user;
      // validation
      this.userService.signIn(user)
          .then((response)=>{
            this.$state.go('root.products');
          })
          .catch((error)=>{
            //show validation message
          });
    }

};
