'use strict';

import signInController from './signInController';
import signInTemplate from './signin.tpl.html';

let auth = angular.module('app.auth', []);

export default auth.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

  $stateProvider
    .state('auth', {
      url: '/signin',
      title: 'Sign in',
      // acl: ['ADMIN'],
      views: {
        '': {
          template: signInTemplate,
          controller: signInController,
          controllerAs: 'ctrl'
        }
      }
    });

});
