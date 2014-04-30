var deps = [
  'angular',
  'ngRoute',
  'controllers/index',
  'directives/index',
  'd3factory/index'
];

define(deps, function(ng) {
  return ng.module('app', [
    'ngRoute',
    'app.controllers',
    'app.directives',
    'app.d3factory'
  ]);
});