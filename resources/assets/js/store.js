import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	countries: [],
  	experiences: [],
  },
  mutations: {
  	addCountry(state, country) {
  		state.countries.push(country);
  	},
  	addExperience(state, experience) {
  		state.experiences.push(experience);
  	}
  }
})