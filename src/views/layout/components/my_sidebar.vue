<template>
    <el-scrollbar class="mscrollbar">
        <el-menu  class="el-menu-vertical-demo" :default-active="$route.path" :router="true">
            <el-submenu index="person" >
                <template slot="title"><i class="el-icon-menu"></i><span class="el-title">练手项目</span></template>
                <el-menu-item index="/views/vueCanvas">
                    <i class="fa fa-sort-amount-asc"></i>画布
                </el-menu-item>
                <el-menu-item index="/views/test">
                    <i class="fa fa-list"></i>测试页一
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    export default {
        data() {
            return {
                data: null
            };
        },
        mounted() {
        },
        methods: {}
    };
</script>

<style scoped>
</style>
