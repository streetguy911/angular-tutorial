'use strict';

import angular from 'angular';
import rootTemplate from './root.tpl.html';
import rootController from './rootController';
import headerTemplate from './content/header.tpl.html';
import headerController from './content/headerController';

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
        },
          'header': {
            template: headerTemplate,
            controller: headerController,
            controllerAs: 'header'
          }
      }
    });

    $urlRouterProvider.otherwise('/dashboard');
});


export default root;
