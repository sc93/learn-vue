var Body = {
    template : '<div>This is Body</div>'
};
var Header = {
    template : '<div>This is Header</div>'
};
var Footer = {
    template : '<div>This is Footer</div>'
};


var routes = [
    {
        path : "/",
        components : {
            default : Body,
            header : Header,
            footer : Footer
        }
    }
];

var router = new VueRouter({
    routes
});

var vm = new Vue({
    router
}).$mount("#app");