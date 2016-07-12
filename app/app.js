  'use strict';

  import angular from 'angular';
  import bootstrap from 'angular-bootstrap';
  import dashboard from './modules/dashboard';
  import uiRouter from 'angular-ui-router';
  import RouteConfig from './common/configs/routeConfig';
  import MainController from './controllers/mainController';
  import databaseService from 'common/services/databaseService';

  angular.module('app', [
    uiRouter
  ])
  .controller('MainController', MainController)
  .service('databaseService', databaseService)
  .config(RouteConfig);
