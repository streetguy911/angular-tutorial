  'use strict';

  import angular from 'angular';
  import bootstrap from 'angular-bootstrap';
  import uiRouter from 'angular-ui-router';
  import RouteConfig from './common/configs/routeConfig';
  import MainController from './controllers/mainController';
  import databaseService from 'common/services/databaseService';

  //modules
  import dashboard from './modules/dashboard';

  angular.module('app', [
    'ui.router'
  ])
  .service('databaseService', databaseService)
  .config(RouteConfig);

