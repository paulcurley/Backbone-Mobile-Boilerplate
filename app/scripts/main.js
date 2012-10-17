(function ($){
    'use strict';
    
    window.APP = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        init: function() {
            console.log('Hello from Backbone!');
        }
    };

    $(document).ready(function(){
        APP.init();
    });

}(Zepto));
