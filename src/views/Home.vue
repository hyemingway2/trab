<template>
  <div id="home">
    <Notice />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notice from '../components/Notice.vue';

@Component({
  components: {
    Notice,
  },
})
export default class Home extends Vue {}
</script>
