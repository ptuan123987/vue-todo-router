<template>
    <div class="">
        <VueList :tasks="tasks"/>
        <CreateTask/>
    </div>
  </template>
<script>
  import VueList from './VueList.vue'
  import CreateTask from './CreateTask.vue'
import { mapState } from 'vuex';
    export default {
        components : { 
            VueList,
            CreateTask
        },
        computed : {
            ...mapState(['tasks'])
        }
  }
  </script>
  <style>
  
  </style>
  