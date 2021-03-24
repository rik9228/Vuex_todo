<template>

<div class="box">
  <p v-if="!checkTodosCountText">タスクがありません</p>
<table>
  <draggable draggable=".todo">
  <transition-group tag="div">
  <tr class="todo" v-for="todo in filterTodos" :key="todo.id">
    <th><p class="num">{{ todo.id }}</p></th>
    <th><p>{{todo.title}}</p></th>
    <th><button class="done" :class="{'notDone' : !todo.done}" :disabled="isEditing" @click="changeState(todo.id)">{{todoState(todo)}}</button></th>
    <th><button class="edit-button" @click="enableEdit(todo)">編集</button></th>
    <th><button class="delete-button" :disabled="isEditing" @click="deleteTodo(todo.id)">削除</button></th>
  </tr>
  </transition-group>
  </draggable>
</table>
<transition name="sample" tag="div">
<div class="updateForm" v-if="showEditForm">
  <h3 class="updateForm__title">ID：{{updateTodo.id}}のタスクを編集</h3>
  <input class="updateForm__form" type="text" v-model="updateTodo.title">
  <button class="updateForm__submit" @click="editTodo(updateTodo.id,updateTodo.title)">確定</button>
  <button class="updateForm__return" @click="closeEdit">戻る</button>
</div>
</transition>
</div>

</template>

<script>
import {  mapGetters, mapState } from 'vuex'
import draggable from 'vuedraggable'
export default {

  components:{
    draggable
  },

  data:function() {
    return {
      updateTodo: {
      title: "",
      id: 0,
      done: false,
    },
    }
  },
  computed:{
    ...mapState(['todos','showEditForm','isEditing']),
    ...mapGetters(['filterTodos','checkTodosCountText']),
    todoState(){
      // computedの引数をとるには？ ▶︎ 中の関数で引数を受けとる
      return function(todo){
        return todo.done ? '完了' : '作業中'
      }
    },

  },
  methods:{
    deleteTodo(todoId){
     this.$store.dispatch('deleteTodo',todoId)
    },
    enableEdit(todo){
     this.updateTodo = {
       title:todo.title,
       id:todo.id,
       done:todo.done,
     }
     this.$store.dispatch('enableEdit')
     this.updateTodo.title = ''
    },
    closeEdit(){
     this.$store.dispatch('closeTodo')
    },
    editTodo(updateTodoId,updateTodoTitle){
     this.$store.dispatch('editTodo',{id : updateTodoId,title : updateTodoTitle})
    },
    changeState(targetTodoId){
      this.$store.dispatch('changeState',targetTodoId)
    }
  }
}
</script>

<style>

table{
  margin-top: 16px;
  border-collapse: collapse;
}
th{
  padding-right: 12px;
}

  .todo{
    cursor: grab;
    margin: 16px 0 0 0;
  border-bottom:1px solid #ccc;
  }


.updateForm{
  margin-top: 16px;
}

.updateForm__title{
  margin:0;
  margin-bottom: 8px;
  padding: 0.3em;
}

.updateForm__submit,
.updateForm__return
{
  margin-left: 16px;
}

.done{
  background:#ff7a13;
  color: #fff;
}

.notDone{
  background:#099bfd;
  color: #fff;
}

/* 表示アニメーション */
.v-enter {
    opacity: 0;
    transform: translateX(-20px);

}
.v-enter-to {
    opacity: 1;
    transform: translateX(0px);
}

.v-leave{
  opacity:1;
    transform: translateX(0px);
}

.v-leave-to{
  opacity:0;
    transform: translateX(-20px);
}

/* アニメーション中のスタイル */
.v-leave-active,
.v-enter-active,
.sample-enter-active,
  .sample-leave-active
 {
    transition: 0.5s;
}

  .sample-enter,
  .sample-leave-to {
    opacity: 0;
    transform:translateY(20px);
  }


  .todo:active{
    cursor: grabbing;
  }

  .num{
    font-weight: 800;
  }

  .delete-button{
    background:#ccc;
  }
  .edit-button{
    background:#00d943;
    color:#fff;
  }


</style>
