import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";


Vue.use(Router)

export default new Router({
    routes: [
        {path:'/index',component:First},
        {path:'/user',component:Second},
        {path:'/three',component:Third},
        {path:'/',redi:First},
    ]
})
