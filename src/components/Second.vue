<template>
    <div>
<!--        <span>{{$store.state.count}}</span>-->
<!--        <hr>-->


        <el-container>
            <el-header>欢迎访问后台管理系统</el-header>
            <el-main>

                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="del_user(scope.row)" type="danger" size="small" class="el-icon-delete"> 删除</el-button>
                            <el-button type="primary" size="small" class="el-icon-more"> 查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>



            </el-main>
            <el-footer>备案号：xxxxx</el-footer>
        </el-container>



    </div>
</template>

<script>
    export default {
        name: "Second",
        methods:{
            del_user(user){
                // console.log(user);
                this.tableData.splice(user.id,1);
                //删除成功后提示
                this.$message({
                    message: '恭喜你，删除成功',
                    type: 'warning',
                    showClose:true,
                    duration:5000,
                });
            }
        },
        data() {
            return {
                tableData: [{
                    id:1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id:2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id:3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id:4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }



    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>
