// import styling for the app
require('./main.scss');

// import vue dependency
var Vue = require('vue');
var app = {};

window.onload=function(){
  // start the app
  var app = new Vue({
    el: '#app',
    data: {
      alert: {
      	show: true,
      	dismissible: true, 
      	type: 'success',
      	types: ['success', 'danger', 'warning', 'info']
      },
      buttonGroup: {
        vertical: false
      },
      buttonCheckbox: {
        list: [{name: 'First', active: false}, {name: 'Second', active: true}, {name: 'Third', active: false}] 
      },
      buttonRadio: {
        model: 'second',
        list: [{name: 'First', value: 'first'}, {name: 'Second', value: 'second'}, {name: 'Third', value: 'third'}] 
      }
    },
    components: {
      'alert': require('bootstrap/_alert.js'),
      'breadcrumb': require('bootstrap/_breadcrumb.js'),
      'button-checkbox': require('bootstrap/_button-checkbox.js'),
      'button-radio': require('bootstrap/_button-radio.js'),
      'button-group': require('bootstrap/_button-group.js'),
      'card': require('bootstrap/_card.js')
    },
    events: {
    	'dismiss::alert': function(){
    		alert('dismissed');
    	}
    }
  });
};