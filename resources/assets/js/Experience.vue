<template>
  <div>
    <flag id=""></flag>
    Id: {{ id }}
    Title: {{ title }}
  </div>
</template>

<script>
import Flag from './Flag.vue'
import store from './store'

export default {
  components: { Flag },

  props: ['id'],

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