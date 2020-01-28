Vue.component('child-component',{
    template : '<button v-on:click="showLog">show</button>',
    methods : {
        showLog : function() {
            this.$emit("show-log");
        }
    }
});

var app = new Vue({
    el : "#app",
    data:{
        message : "Hello Vue! passed from parent component!"
    },
    methods:{
        printText:function(){
            console.log("received an event");
        }
    }
});
