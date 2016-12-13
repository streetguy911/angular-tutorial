'use strict';

let url = 'https://angular-tutorial-server.herokuapp.com';
//let url = 'http://localhost:5000'
let config = {
    api: {
      product: {
        list: config.api.url + '/api/product'
      },
      category: {
        list: config.api.url + '/api/category'
      },
      auth: {
        signin: config.api.url + '/auth/signin'
      }
    }
  };


export default config;

