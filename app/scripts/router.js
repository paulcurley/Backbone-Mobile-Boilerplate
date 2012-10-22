var Router;

(function ($){
    'use strict';

    Router = Backbone.Router.extend({
	  initialize: function (){
	  	  
	  },
	  
      routes: {
        "*index": "main"
      },
	  
      current: function () {
          return Backbone.history.fragment;
      },
	  
      main: function() {
		  APP.view = new CoreView();
      }
    });

    return Router;
    

}(Zepto));



 