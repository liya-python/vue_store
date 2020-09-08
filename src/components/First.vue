<template>
    <div>
        第一个组件
        <el-row>
            <el-button @click="add">按钮</el-button>
            <el-button @click="add" type="success">按钮</el-button>
            <el-button @click="add" type="warning">按钮</el-button>
            <el-button @click="add" type="primary" class="el-icon-plus"> 按钮</el-button>
            <el-button @click="add" type="info">按钮</el-button>
            <el-button @click="add" type="danger" class="el-icon-delete"> 删除</el-button>
        </el-row>

        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "First",
        methods: {
            add() {
                //向状态机提交一个动作
                this.$store.commit('add_conut')
            }
        }
    }
</script>

<style scoped>

</style>
