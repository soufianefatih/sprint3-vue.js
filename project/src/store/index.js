import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    email: "",
    password: "",
  },
  getters: {
    name: (state) => {
      return state.name;
    },
    email: (state) => {
      return state.email;
    },
    password: (state) => {
      return state.password;
    },
  },
  mutations: {
    updatename(state,value) {
      state.name = value},
    updateemail(state,value) {
      state.email = value},
    updatepassword(state,value) {
      state.password = value},
  },
  actions: {
    updatename: ({commit, state }, newValue) => {
      commit("updatename", newValue);
      return state.name;
    },
    updateemail: ({commit, state }, newValue) => {
      commit("updateemail", newValue);
      return state.email;
    },
    updatepassword: ({commit, state }, newValue) => {
      commit("updatepassword" , newValue);
      return state.password;
    },
  },
  modules: {},
});
