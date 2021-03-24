<template>
<div>
<input type="text" placeholder="タスクを検索" v-model="searchTodoValue">
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed:{
    searchTodoValue:{
      get () {
        return this.$store.state.searchTodoValue
        },
        set (val) {
          this.updateMessage(val)
        }
    }
  },
  methods:{
    ...mapMutations([ 'updateMessage' ])
  }

}
</script>

<style scoped>

input {
  margin-top: 16px;
}

</style>
