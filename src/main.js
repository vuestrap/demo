// import styling for the app
require('./main.scss');

// import vue dependency
var Vue = require('vue');
var app = {};
var inputStates = ['standard', 'success', 'error', 'warning'];

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
        list: [{name: 'First', checked: false}, {name: 'Second', checked: true}, {name: 'Third', checked: false}] 
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
        types: ['standard', 'image-overlay'],
        variant: 'standard',
        variants: ['standard', 'primary', 'success', 'info', 'warning', 'danger', 'inverse'],
        align: 'left',
        aligns: ['left', 'center', 'right']
      }, 
      dropdown: {
        caret: true,
        variant: 'standard',
        variants: ['standard', 'primary', 'success', 'info', 'warning', 'danger']
      },
      dropdownSelect: {
        model: {name: 'First', value:'first'},
        caret: true,
        variant: 'standard',
        variants: ['standard', 'primary', 'success', 'info', 'warning', 'danger'],
        list: [{name: 'First', value: 'first'}, {name: 'Second', value: 'second'}, {name: 'Third', value: 'third'}] 
      },
      formInput: {
        model: '',
        stateIcon: true,
        state: 'standard',
        states: inputStates,
      },
      formSelect: {
        model: 'default',
        default: {text: 'Please select one', value:'default'},
        multiple: false,
        options: [{text: 'Male', value: 'male'}, {text: 'Female', value: 'female'}],
        state: 'standard',
        states: inputStates,
      },
      formTextarea: {
        model: '',
        default: {text: 'Please select one', value:'default'},
        state: 'standard',
        states: inputStates,
      },
      formCheckbox: {
        list: [{name: 'First', value: 'first', checked: true}, {name: 'Second', value: 'second', checked: false}, {name: 'Third (disabled)', value: 'third', disabled: true, checked: false}],
        vertical: true,
        state: 'standard',
        states: inputStates
      },
      formRadio: {
        model: 'second',
        list: [{name: 'First', value: 'first'}, {name: 'Second', value: 'second'}, {name: 'Third (disabled)', value: 'third', disabled: true}],
        vertical: true,
        state: 'standard',
        states: inputStates
      }
    },
    components: {
      'alert': require('bootstrap/alert.js'),
      'breadcrumb': require('bootstrap/breadcrumb.js'),
      'button-checkbox': require('bootstrap/button-checkbox.js'),
      'button-radio': require('bootstrap/button-radio.js'),
      'button-group': require('bootstrap/button-group.js'),
      'card': require('bootstrap/card.js'),
      'dropdown': require('bootstrap/dropdown.js'),
      'dropdown-select': require('bootstrap/dropdown-select.js'),
      'form-input': require('bootstrap/form-input.js'),
      'form-select': require('bootstrap/form-select.js'),
      'form-textarea': require('bootstrap/form-textarea.js'),
      'form-checkbox': require('bootstrap/form-checkbox.js'),
      'form-radio': require('bootstrap/form-radio.js')
    },
    events: {
    	'dismiss::alert': function(){
        console.log('dismiss alert called');
      },
      'hide::dropdown': function(){
        console.log('hide dropdown called');
      },
      'select::option': function(val){
    		console.log('option selected', val);
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
        } else {
          this.card.header = true;
          this.card.footer = true;
        }
      }
    }
  });
};