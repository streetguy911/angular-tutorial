'use strict';

import angular from 'angular';
import routeConfig from './configs/routeConfig';
import runConfig from './configs/runConfig';
import databaseService from './services/databaseService';
import userService from './services/userService';

let commonModule = angular.module('app.common', []);

commonModule.config(routeConfig);
commonModule.run(runConfig);
commonModule.service('databaseService', databaseService);
commonModule.service('userService', userService);

export default commonModule;
