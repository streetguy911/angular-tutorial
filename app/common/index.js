'use strict';

import angular from 'angular';
import appConfig from './configs/appConfig';
import routeConfig from './configs/routeConfig';
import runConfig from './configs/runConfig';
import databaseService from './services/databaseService';
import userService from './services/userService';
import modalsService from './services/modalsService';

let commonModule = angular.module('app.common', []);

commonModule.constant('appConfig', appConfig);
commonModule.config(routeConfig);
commonModule.run(runConfig);
commonModule.service('databaseService', databaseService);
commonModule.service('userService', userService);
commonModule.service('modalsService', modalsService);

export default commonModule;
