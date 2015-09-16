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
      },
      card: {
        header: true, 
        footer: true,
        list: true,
        links: true,
        body: true,
        type: 'standard',
        types: ['standard', 'inverse', 'image-overlay'],
        variant: 'standard',
        variants: ['standard', 'primary', 'success', 'info', 'warning', 'danger']
      }
    },
    components: {
      'alert': require('bootstrap/alert.js'),
      'breadcrumb': require('bootstrap/breadcrumb.js'),
      'button-checkbox': require('bootstrap/button-checkbox.js'),
      'button-radio': require('bootstrap/button-radio.js'),
      'button-group': require('bootstrap/button-group.js'),
      'card': require('bootstrap/card.js')
    },
    events: {
    	'dismiss::alert': function(){
    		alert('dismissed');
    	}
    }, 
    watch: {
      'card.type': function(val){
        if (val === 'image-overlay') {
          this.card.header = false;
          this.card.footer = false;
        }
      },
      'card.variant': function(val){
        if (val !== 'standard') {
          this.card.header = false;
          this.card.footer = false;
        }
      }
    }
  });
};