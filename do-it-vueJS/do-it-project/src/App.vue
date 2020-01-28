<template>
  <div id="app">
    <header-component></header-component>
    <input-component v-on:addTodo="addTodo"></input-component>
    <list-component v-bind:propsdata="todoItems" v-on:removeToDo="removeToDo"></list-component>
    <footer-component v-on:clearTodo="clearTodo"></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import InputComponent from './components/InputComponent.vue';
import ListComponent from './components/ListComponent.vue';

export default {
  name: 'app',
  components: {
    'header-component':HeaderComponent,
    'input-component':InputComponent,
    'list-component':ListComponent,
    'footer-component':FooterComponent,
  },
  data() {
    return {
      todoItems:[]
    }
  },
  created(){
    if(localStorage.length>0) {
      for(var i=0; i<localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods : {
    addTodo(todoItem){
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem);
    },
    clearTodo() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeToDo(item,index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index,1);
    }
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color:#F6F6F8;
  }
  input {
    border-style:groove;
    width: 75%;
  }
  button {
    border-style:groove;
  }
  .shodow {
    box-shadow: 5px 10px 10px (0,0,0,0.03)
  }
  .fontAwesome_::before{
    font-family: "fontawesome"
  }
  i{
    font-style: unset;
  }
</style>
