<template>
    <div class="">
        <div v-for="(task,index) in tasks" :key="index" :index="index">
            <span :class="{completed : task.completed == true}">
                {{task.name}}
            </span>

            <button class="btn btn-danger btn-sm" 
            @click.prevent="deleteTask(index)">Delete</button>

            <button class="btn btn-primary btn-sm"
            @click.prevent="completedTask(index)"
            >Completed</button>
        </div>
        
    </div>
  </template>
  <script>
import { mapActions } from 'vuex';

    export default {
        props : ['tasks'],
        methods :{
            ...mapActions(['deleteTask','completedTask'])
        }
  }
  </script>
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  