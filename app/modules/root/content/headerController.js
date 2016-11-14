'use strict';

export default class HeaderController{
  constructor(){
    console.log('headerController');
    this.sitename = 'Kitchen';
    this.user = {
      'username': 'telndima'
    }

    this.menuItems = [
      {'name':'dashboard', 'status': 'active', 'link': '#/dashboard'},
      {'name':'Products', 'status': '', 'link': '#/products'},
      {'name':'other item', 'status': '', 'link': '#'}
    ];
  }
}
