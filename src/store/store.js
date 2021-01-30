import Vue from "vue";
import Vuex from "vuex";
import * as todo from "@/store/modules/todo.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: todo.state,
    mutations: todo.mutations,
    getters: todo.getters,
    actions: todo.actions
});
