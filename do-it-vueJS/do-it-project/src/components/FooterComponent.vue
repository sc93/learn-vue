<template>
  <div class="clearAllContainer">
     <span class="clearAll" v-on:click="clearTodo">ClearAll</span>
  </div>
</template>

<script>
export default {
  methods : {
    clearTodo() {
      this.$emit('clearTodo');
    }
  }
}
</script>

<style>
.clearAllContainer {
  width:30%;
  height: 50px;
  line-height:50px;
  background-color: white;
  border-radius: 5px;
  margin :0 auto;
}
.clearAll {
  color:#e20303;
  display: block;
}
</style>