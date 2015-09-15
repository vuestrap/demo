// import styling for the app
require('./main.scss');

// import vue dependency
var Vue = require('vue');

// start the app
var app = new Vue({
  el: '#app',
  data: {
    alert: {
    	show: true,
    	dismissible: true, 
    	type: 'success',
    	types: ['success', 'danger', 'warning', 'info']
    }
  },
  components: {
    'alert': require('bootstrap/_alert.js')
  },
  events: {
  	'dismiss::alert': function(){
  		alert("dismissed");
  	}
  }
});

// for debugging only
window.app = app;