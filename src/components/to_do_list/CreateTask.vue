<template>
    <div class="">
      <form action="" @submit.prevent="add">
        <input type="text" placeholder="Enter name" class="form-control" v-model="newTask.name" ref="input_name">
        <input type="time" placeholder="Enter time" class="form-control" v-model="newTask.time">
        <button class="btn btn-primary">Add</button>
      </form>
    </div>
  </template>
  <script>
  import { mapState,mapActions } from 'vuex';
    export default {
      data() {
        return { 
          newTask : { 
            name : '',
            time :'',
            completed :false,
          }
        }
      },
      computed : {
        ...mapState(['tasks'])
      },
      methods : {
        ...mapActions(['addTask']),
        add() {
          
          this.addTask({...this.newTask})
          this.newTask={}
          this.$refs.input_name.focus()
        }
      }
  }
  </script>
  <style>
  
  </style>
  