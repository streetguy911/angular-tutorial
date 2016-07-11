'use strict';

import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import dashboard from './modules/dashboard';
import uiRouter from 'angular-ui-router';

angular.module('app', [
  dashboard.name,
  uiRouter
]).config(($stateProvider, $urlRouterProvider)=>{
  $stateProvider
    .state('dashboard', {
      url: '/',
      template: '<p>test</p>'
    });

  $urlRouterProvider.otherwise('/dashboard');
});
