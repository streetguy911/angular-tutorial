'use strict';

export default class DatabaseService {
    constructor ($http) {
        this.$http = $http;

        console.log('DatabaseService');
    }
    recieveProducts () {
        return this.$http.get('https://angular-tutorial-server.herokuapp.com/api/product');
    }

    recieveProductsCategories() {
        return this.$http.get('https://angular-tutorial-server.herokuapp.com/api/category');
    }

}