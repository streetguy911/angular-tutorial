'use strict';

import angular from 'angular';
import routeConfig from './configs/routeConfig';
import databaseService from './services/databaseService';

let commonModule = angular.module('app.common', []);

commonModule.config(routeConfig);
commonModule.service('databaseService', databaseService);

export default commonModule;
