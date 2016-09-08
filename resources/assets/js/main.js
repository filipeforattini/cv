import Vue from 'vue'
import store from './store'
import Curriculum from './Curriculum.vue'

Vue.config.devtools = true;

new Vue({
  el: 'body',

  store,

  components: { Curriculum },

  data () {
  	return {
	  	cts: [
	  		{ id: 0, name: 'Brazil', 		flag: 'br flag' },
	  		{ id: 1, name: 'Argentina', 	flag: 'ar flag' },
	  		{ id: 2, name: 'Chile', 		flag: 'cl flag' },
	  		{ id: 3, name: 'Netherlands', 	flag: 'nl flag' },
	  		{ id: 4, name: 'Poland', 		flag: 'pl flag' }
	  	],
	  	xps: [{
	  		id: 0,
	  		title: 'Teste Bra',
	  		started_at: '2016',
	  		ended_at: null,
	  		country_id: 0,
	  		description: 'Lorem ipsum'
	  	},{
	  		id: 1,
	  		title: 'Teste Arg',
	  		started_at: '2016',
	  		ended_at: '2016',
	  		country_id: 1,
	  		description: 'Lorem ipsum'
	  	}]
	  };
  },

  ready () {
  	this.cts.forEach(function(element, index) {
	  	store.dispatch('addCountry', element);
  	});
  	this.xps.forEach(function(element, index) {
  		store.dispatch('addExperience', element);
  	});
  },
})
