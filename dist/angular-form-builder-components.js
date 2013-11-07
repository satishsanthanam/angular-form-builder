(function() {
  var a, config;

  a = angular.module('builder.components', ['builder']);

  config = function($builderProvider) {
    return $builderProvider.registerComponent('textInput', {
      group: 'Default',
      label: 'Text Input',
      description: 'description',
      placeholder: 'placeholder',
      required: false,
      template: "<div class=\"form-group\">\n    <label for=\"{{name+label}}\" ng-bind=\"label\" class=\"col-md-2 control-label\"></label>\n    <div class=\"col-md-10\">\n        <input type=\"text\" validator=\"{{validation}}\" id=\"{{name+label}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n    </div>\n</div>"
    });
  };

  config.$inject = ['$builderProvider'];

  a.config(config);

}).call(this);
