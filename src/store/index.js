import { createStore } from 'vuex'

export default createStore({
    state: {
        tasks: [{
                name: 'eat',
                completed: false,
                time: '6:00',

            },
            {
                name: 'sleep',
                completed: false,
                time: '12:00'
            }
        ]
    },
    mutations: {
        deleteTask(state, index) {
            state.tasks.splice(index, 1);
        },
        completedTask(state, index) {
            state.tasks[index].completed = true
        },
        addTask(state, newTask) {
            state.tasks.push(newTask)
        }
    },
    actions: {
        deleteTask({ commit }, index) {
            commit('deleteTask', index)
        },
        completedTask({ commit }, index) {
            commit('completedTask', index)
        },
        addTask({ commit }, newTask) {
            commit('addTask', newTask)
        }
    },
    modules: {}
})