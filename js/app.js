var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'templates/home.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'templates/about.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
});