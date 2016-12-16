'use strict';

let config = {
  api: {
    url: 'https://angular-tutorial-server.herokuapp.com',
  }
};
config.api.product = {
  list: config.api.url + '/api/product'
};
config.api.category = {
  list: config.api.url + '/api/category'
};
config.api.auth = {
  signin: config.api.url + '/auth/signin'
};


export default config;

