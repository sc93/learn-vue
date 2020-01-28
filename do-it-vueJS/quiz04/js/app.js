new Vue({
    el:'#app',
    data:{
        message : 'Hello Vue.js',
        uid : 10,
        text : 'my name is Shin seong cheol!',
        flag : false
    },
    methods : {
        clickBtn() {
            alert('clickBtn')
        },
        clickBtnParam(num) {
            alert("clickBtnParam : "+num)
        }
    }
})