'use strict';
//views
import mainTemplate from '../views/main.tpl.html';
import dashboardTpl from '../views/dashboard.tpl.html';
//controllers
import mainController from '../controllers/mainController';
import dashboardController from '../controllers/dashboardController';



export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        '': {
          template: mainTemplate,
          controller: mainController
        }
      }
    })
    .state('root.dashboard', {
      url: '/dashboard',
      views: {
        main: {
          template: dashboardTpl,
          controller: dashboardController,
          controllerAs: 'main'
        }
      }
    });

  $urlRouterProvider.otherwise('/dashboard');

  // $locationProvider.html5Mode(true);
};
