'use strict';

<<<<<<< HEAD
  import angular from 'angular';
  import bootstrap from 'angular-bootstrap';
  import uiRouter from 'angular-ui-router';
  import RouteConfig from './common/configs/routeConfig';
  import MainController from './controllers/mainController';
  import databaseService from 'common/services/databaseService';
=======
import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import uiRouter from 'angular-ui-router';
>>>>>>> update structure

//modules
import common from './common';
import root from './modules/root';
import dashboard from './modules/dashboard';

<<<<<<< HEAD
  angular.module('app', [
    uiRouter

  ])
  .service('databaseService', databaseService)
  .config(RouteConfig);
=======

angular.module('app', [
    uiRouter,
    common.name,
    root.name,
    dashboard.name
]);
>>>>>>> update structure

