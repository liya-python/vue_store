//导包 导入vue 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'

//将vuex注入到vue的实例中
Vue.use(Vuex);

//将定义好的vue导出
export default new Vuex.Store({
    state:{
        count:100,
    },
    mutations:{
        add_conut:function (state) {
            state.count--;
        }
    },
    getters:{

    },
})





