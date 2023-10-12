import {createApp} from "vue"
import App from "./App.vue"
import router from "./routes/router.js"
import { createStore } from "vuex"

const store=createStore({
    state:{
        name:"Nguyễn Phong Cháng",
    },
    getters:{
        name:(state)=>{
            return state.name
        }
    }
})

const app=createApp(App)
app.use(store)
app.use(router)
app.mount("#app")

