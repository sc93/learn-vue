
Vue.component('sibling-component',{
    props : ['propsdata'],
    template : `<p>{{propsdata}}</p>`
});

Vue.component('child-component',{
    props : ['propsdata'],
    template : `<p>{{propsdata}}</p>`
});
var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello Vue! passed from parent component',
        anotherMessage : 'Hello Vue! this is anotherMessage'
    }
})