<template>
  <div>

     <h2 class="ui header centered aligned">Filipe Forattini</h2>

    <div class="ui two column doubling stackable grid container">
      <div class="column">
        <p>
          <i class="mobile icon"></i> +55 34 99106 6048
        </p>
      </div>
      <div class="column">
        <p>
          <i class="mail icon"></i> filipeforattini1@gmail.com
        </p>
      </div>
    </div>

    <div div v-for="xp in experiences">
      <experience v-bind:id="0"></experience>
    </div>

  </div>
</template>

<script>
import Experience from './Experience.vue'

export default {
  components: { Experience },

  vuex: {
    getters: {
      experiences: function(state) {
        return state.experiences;
      }
    }
  }
}
</script>