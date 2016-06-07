'use strict';

import db from './db.js';

export default class DatabaseService {
    constructor () {
        this.db = db;
    }
    getProducts () {
        return this.db;
    }
}