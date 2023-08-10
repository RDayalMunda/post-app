const routes = [
    { path: "/", name: "Home", component:()=>import("../components/home/home.js") },
    { path: "/posts", name: "Posts", component:()=>import("../components/posts/posts.js") },
    { path: "/people", name: "People", component:()=>import("../components/people/people.js") },
    { path: "/sign-out", name: "Sign.Out", component:()=>import("../components/common/sign-out.js") },
]

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory()
})

export default router