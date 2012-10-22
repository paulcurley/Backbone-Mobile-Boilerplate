var CoreView;

(function ($){
    'use strict';
    
    CoreView = Backbone.View.extend({
 

        initialize: function () {
            console.log('coreview');
        },

        render: function ($article) {
            
            return this;
        }
    });
    
    return CoreView;


}(Zepto));
