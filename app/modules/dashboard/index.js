'use strict';

import databaseService from '../../common/services/databaseService';
import dashboardController from './dashboardController';
import angular from 'angular';

let dashboard = angular.module('app.dashboard', []);

	dashboard.service('databaseService', databaseService);
	dashboard.controller('dashboardController', ['databaseService', dashboardController]);


export default dashboard;
