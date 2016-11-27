'use strict';

import databaseService from '../../common/services/databaseService';
import dashboardController from './dashboardController';
import dashboardTemplate from './dashboard.tpl.html';

let dashboard = angular.module('app.dashboard', []);

export default dashboard.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('root.dashboard', {
      url: '/dashboard',
      title: 'Dashboard',
      views: {
        'root': {
          template: dashboardTemplate,
          controller: dashboardController,
          controllerAs: 'dashboard'
        }
      }
    });

});
