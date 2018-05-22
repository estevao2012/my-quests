<template>
  <div>


  <div class="row">
    <div class="col-sm-6">
      <h1>Hello Hero Quests</h1>
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="task_title">Titulo da tarefa</label>
            <input v-model="newTask.title" id="task_title" class="form-control"/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <button @click="addTask" class="btn btn-primary">Adicionar tarefa</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6">
      <h1>Tarefas do dia</h1>
      <ul>
        <li v-for="task in taskList" @click="toggleDone(task)" :class="{ taskDone: task.done }">
          {{ task.title }}
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      taskList: 'allTasks'
    })
  },
  methods: {
    addTask(){
      var component = this;
      this.$store
          .dispatch('saveTask', { id: this.newTask.title, title: this.newTask.title, done: false } )
          .then(function(){
            component.newTask.title = "";
          });
    },
    toggleDone(task){
      this.$store.dispatch('saveTask', { id: task.title, title: task.title, done: !task.done } );
    }
  },
  data () {
    return {
      newTask: {
        title: ""
      }
    }
  }
}
</script>

<style lang="scss">
.taskDone{
  text-decoration: line-through;
}
</style>
