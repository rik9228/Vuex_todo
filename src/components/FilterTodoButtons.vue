<template>

<div class="todo-list__header">
      <input type="radio" id="all" name="disp" value="all" @click="changeTodos" checked/>
      <label for="all">全て({{todosCount}})</label>
      <input type="radio" id="notDone" name="disp" value="running" @click="changeTodos"/>
      <label for="notDone">作業中({{notDoneTodosCount}})</label>
      <input type="radio" id="done" name="disp" value="completed" @click="changeTodos"/>
      <label for="done">完了({{doneTodosCount}})</label>
</div>

</template>

<script>

import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['doneTodosCount','notDoneTodosCount','todosCount'])
  },
  methods:{
    changeTodos(e){
      const targetValue = e.target.value;
      this.$store.dispatch('changeTodos',targetValue);
    }
  }
}
</script>

<style>
.todo-list__header{
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  width: 100%;
}

</style>
