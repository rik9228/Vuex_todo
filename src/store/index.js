import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos: [],
    showEditForm: false,
    filterTodoState: false,
    isEditing: false,
    searchTodoValue: "",
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    notDoneTodos: (state) => {
      return state.todos.filter((todo) => !todo.done);
    },
    todosCount: (state) => {
      // stateのtodosの数を返す
      return state.todos.length;
    },
    doneTodosCount: (state, getters) => {
      // 完了しているタスクの数を返す
      return getters.doneTodos.length;
    },
    notDoneTodosCount: (state, getters) => {
      return getters.notDoneTodos.length;
    },
    todoCounts: (state) => {
      return state.todos.length;
    },
    checkTodosCountText: (state, getters) => {
      if (getters.todoCounts !== 0) {
        return true;
      } else {
        return false;
      }
    },
    filterTodos(state, getters) {

      let arr = null;
      if (state.filterTodoState === 'running') {
        arr = getters.notDoneTodos;
      } else if (state.filterTodoState === 'completed') {
        arr = getters.doneTodos;
      } else {
        arr = state.todos;
      }
      return arr.filter((todo) => todo.title.indexOf(state.searchTodoValue) !== -1);
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        title: todo.title,
        id: todo.id,
        done: todo.done,
      });
    },
    deleteTodo(state, targetId) {
      const res = confirm("本当に削除しますか？");
      if (res) {
        state.todos = state.todos.filter((todo) => todo.id !== targetId);
      } else {
        return false;
      }
    },
    enableEdit(state) {
      state.showEditForm = true;
      state.isEditing = true;
    },
    closeTodo(state) {
      state.showEditForm = !state.showEditForm;
      state.isEditing = !state.isEditing;
    },
    editTodo(state, updateTodo) {
      if (updateTodo.title === "") {
        alert("項目を入力してください");
        return;
      }
      state.todos.forEach((todo) => {
        if (todo.id === updateTodo.id) {
          todo.title = updateTodo.title;
        }
      });
      state.isEditing = !state.isEditing;
      state.showEditForm = !state.showEditForm;
    },
    changeState(state, targetTodoId) {
      state.todos.forEach((todo) => {
        if (todo.id === targetTodoId) {
          todo.done = !todo.done;
        }
      });
    },
    changeTodos(state, targetValue) {
      state.filterTodoState = targetValue;
      console.log(state.filterTodoState);
    },
    updateMessage(state, val) {
      state.searchTodoValue = val;
    },
  },
  actions: {
    addTodo(context, todo) {
      // todoオブジェクトが引数に入ってくる
      this.commit("addTodo", todo);
    },
    deleteTodo(context, targetId) {
      // todoオブジェクトが引数に入ってくる
      this.commit("deleteTodo", targetId);
    },
    enableEdit() {
      // todoオブジェクトが引数に入ってくる
      this.commit("enableEdit");
    },
    closeTodo() {
      // todoオブジェクトが引数に入ってくる
      this.commit("closeTodo");
    },
    editTodo(context, updateTodo) {
      // todoオブジェクトが引数に入ってくる
      this.commit("editTodo", updateTodo);
    },
    changeState(context, targetTodoId) {
      this.commit("changeState", targetTodoId);
    },
    changeTodos(context, targetValue) {
      this.commit("changeTodos", targetValue);
    },
    updateMessage(context, val) {
      this.commit("updateMessage", val);
    },
  },
});
