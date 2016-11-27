'use strict';

import _ from 'lodash';

export default class HeaderController{
  constructor($state, user){
    console.log('headerController');
    this.sitename = 'Kitchen';
    this.user = user;



    var states = $state.get();
    this.menuItems = _.filter(states, (state) => {
      let allow = true;
      if (state.acl) {
        let acl = state.acl;

        allow = _.intersection(acl, user.acl).length;
      }
      return allow && state.title;
    });

  }
}
