Vue.component('parant-component',{
    props : ['propsdata'],
    template : `<p>{{propsdata}}</p>`
});

new Vue({
    el : '#app',
    data : {
        message : `Hello Vue! passed from parent component!`
    },
    components : {
        'child-component' : {
            template : `<p>{{childMessage}}</p>`,
            data : function(){
                return {
                    childMessage : `Hello~`
                }
            }
        }
    }
});
