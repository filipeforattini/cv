<template>
  <div>
    <i class="{{ flag }}"></i>
  </div>
</template>

<script>
import store from './store'

export default {
  props: ['identifier'],

  data () {
    return {
      name: null,
      flag: null,
      teste: 1
    };
  },

  ready () {
    var country = store.countries[this.identifier];
    this.name = country.name;
    this.flag = country.flag;
  }
}
</script>