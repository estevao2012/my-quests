export const STORAGE_KEY = 'tasks';

// initial state
const state = {
  all: {}
};

// getters
const getters = {
  allTasks: state => state.all
};

// actions
const actions = {
  getAllTasks(context) {
    let tasks = localStorage.getItem(STORAGE_KEY);
    if( tasks !== null)
      context.commit('setTasks', JSON.parse( tasks ));
  },
  saveTask(context, task) {
    context.commit("setTask", task);
    localStorage.setItem(STORAGE_KEY, JSON.stringify( state.all ));
  }
};

// mutations
const mutations = {
  setTasks(state, tasks) {
    state.all = tasks;
  },
  setTask(state, task) {
    state.all[task.id] = task;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
