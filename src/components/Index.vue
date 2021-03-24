<template>
<div class="wrapper">
<AddTodo></AddTodo>
<SearchTodo></SearchTodo>
<FilterTodoButtons></FilterTodoButtons>
<Todo></Todo>
</div>
</template>

<script>
import AddTodo from './AddTodo'
import SearchTodo from './SearchTodo'
import FilterTodoButtons from './FilterTodoButtons'
import Todo from './Todo'
export default {

  components:{
  AddTodo,
  SearchTodo,
  Todo,
  FilterTodoButtons,
  },

computed:{
}

}
</script>

<style>

</style>
