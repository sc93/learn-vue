var cmp1 = {
    template : '<div>첫번쩨 지역 컴포넌트 : {{ cmp1Data }}</div>',
    data : function(){
        return {
            cmp1Data : 100
        }
    }
}
var cmp2 = {
    template : '<div>첫번쩨 지역 컴포넌트 : {{ cmp2Data }}</div>',
    data : function () {
        return {
            cmp2Data : cmp1.data.cmp1Data
        }
    }
}
new Vue({
    el : '#app',
    components : {
        'my-component1' : cmp1,
        'my-component2' : cmp2
    }
})