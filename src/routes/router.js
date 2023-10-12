import { createRouter,createWebHistory } from "vue-router";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"",
            component:()=>import("../pages/home.vue"),
            name:"home"
        }
    ]
})
export default router