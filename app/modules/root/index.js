'use strict';

import angular from 'angular';
import rootTemplate from './root.tpl.html';
import rootController from './rootController';

let root = angular.module('app.root', [])
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        '': {
          template: rootTemplate,
          controller: rootController
        }
      }
    });

    $urlRouterProvider.otherwise('/dashboard');
});


export default root;
