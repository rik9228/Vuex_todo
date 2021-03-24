<template>
<div>
 <input type="text" placeholder="ここにタスクを入力" v-model="title">
 <button @click="addTodo">Todoを追加</button>
</div>
</template>

<script>
export default {
 data:function() {
   return {
     title:'',
     id:0,
     done:false
   }
 },
 methods:{
   addTodo(){
     if(this.title === ''){
   alert('項目を入力してください')
       return false;
     }else{
      //  上のオブジェクトがそのまま渡される
       this.$store.dispatch('addTodo', {title: this.title, id: this.id,done:this.done} )
       this.id++
       this.title = ''
     }
   }
 }
}
</script>

<style scoped>

div{
  width: 100%;
}

button{
  background:#34b02a;
  color: #fff;
  margin-left: 16px;
  box-shadow: 0 2px 0 0 #33333320;
  transition: 0.5s;
  overflow: hidden;
}

button:hover{
  transform:translateY(3px);
  box-shadow: initial;
}


</style>
