<template>
  <div>
    <flag :identifier.sync="country_id"></flag>
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
      title: 'Teste Bra',
      started_at: '2016',
      ended_at: null,
      country_id: 0,
      description: 'Lorem ipsum'
    };
  },

  ready () {
    var experience = store.experiences[this.id];
    this.title        = experience.title;
    this.started_at   = experience.started_at;
    this.ended_at     = experience.ended_at;
    this.country_id   = experience.country_id;
    this.description  = experience.description;
  }
}
</script>