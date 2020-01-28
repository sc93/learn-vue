<template>
  <section>
    <ul>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem" class="shadow">
          <i class="checkBtn fas fa-check fontAwesome_" aria-hidden="true"></i>
          {{ todoItem }}
          <span class="removeBtn" type="button" v-on:click="removeToDo(todoItem,index)">
            <i class="fas fa-trash fontAwesome_" aria-hidden="true"></i>
          </span>
        </li>
      </transition-group>
      
    </ul>
  </section>
</template>
<script>
export default {
  methods : {
    removeToDo(todoItem,index) {
      console.log('list component')
      this.$emit('removeToDo',todoItem,index);
    }
  },
  props:['propsdata'],
}
</script>

<style scoped>
  ul {
    list-style-type:none;
    padding-left: 0px;
    margin-top :0;
    text-align: left;
  }
  li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin:0.5rem 0;
    padding:0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color:#62acde;
    margin-right: 5px;
  }
  .removeBtn {
    line-height: 45px;
    margin-left:auto;
    color:#de4343;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px)
  }
</style>