<template>
<div id="app">
  <div class="container">
    <h2 class="title">Todoアプリ</h2>
    <transition appear v-cloak>
     <Index></Index>
    </transition>
  </div>
</div>

</template>

<script>
import Index from './components/Index'
export default {

  components:{
    Index
  }

}
</script>

<style>
@import "./css/style.css";

#app{
  font-family: 'Noto Sans JP', sans-serif;
}

button{
  border:none;
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 5px;
}

th{
  font-weight: 400;
}

.v-enter,
.v-leave-to
 {
    opacity: 0;
    transform: translateX(-20px)
}

.v-leave-active,
.v-enter-active
 {
    transition: 0.5s;
}


input {
  padding: 0.4em ;
}

</style>
