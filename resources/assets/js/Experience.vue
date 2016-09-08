<template>
  <div>
    <flag :identifier.sync="identifier"></flag>
    Id: {{ identifier }}
    Title: {{ title }}
  </div>
</template>

<script>
import Flag from './Flag.vue'
import store from './store'

export default {
  components: { Flag },

  props: ['identifier'],

  data () {
    return {
      title: 'Teste'
    };
  },

  ready () {
    var experience = store.experiences[this.id];
    this.title = experience.title;
  }
}
</script>