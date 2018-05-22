<template>
  <div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapActions({
      getAllTasks: 'getAllTasks'
    })
  },
  mounted(){
    this.getAllTasks;
  }
}
</script>

<style lang="scss">
.container{
  width: 100%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
