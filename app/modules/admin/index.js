'use strict';

import databaseService from '../../common/services/databaseService';
import adminController from './adminController';
import adminTemplate from './admin.tpl.html';

let admin = angular.module('app.admin', []);

export default admin.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  let isAdmin = (user) => {
    return _.includes(user.acl, 'ADMIN');
  };

  $stateProvider
    .state('root.admin', {
      url: '/admin',
      title: 'Admin',
      acl: ['ADMIN'],
      resolve: {
        adminUser: (user, $q, $state) => {
          let dfd = $q.defer();

          if (user && isAdmin(user)) {
            dfd.resolve(user);
          } else {
            $state.go('root.dashboard');
            dfd.reject(null);
          }

          return dfd.promise;
        }
      },
      views: {
        'root': {
          template: adminTemplate,
          controller: adminController,
          controllerAs: 'admin'
        }
      }
    });

});
