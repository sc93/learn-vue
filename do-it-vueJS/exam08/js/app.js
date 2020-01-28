var User = {
    template: `
    <div>
        User Component
        <router-link to="/user/profile">User Profile Component</router-link>
        <router-link to="/user/posts">User Post Component</router-link>
        <router-view></router-view>
    </div>`
};

var UserProfile = { template: `<h1>User Profile Component</h1>` };
var UserPost = { template: `<h1>User Post Component</h1>` };

var routes = [
    {
        path: "/user",
        component: User,
        children: [
            {
                path: "posts",
                component: UserPost
            },
            {
                path: "profile",
                component: UserProfile
            },
        ]
    }
];

var router = new VueRouter({
    routes
});

var app = new Vue({
    router
}).$mount("#app");