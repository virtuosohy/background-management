<script setup>
import {Avatar, HomeFilled, MessageBox, Reading, UserFilled,} from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
  <el-aside width="$store.state.isCollapsed ？'64px':200px'">
    <el-menu :collapse="$store.state.isCollapsed"
    :router="true"
    :default-active="route.fullPath">
      <el-menu-item index="/index">
        <el-icon><HomeFilled/></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-menu-item index="/center">
        <el-icon><Avatar /></el-icon>
        <span>个人中心</span>
      </el-menu-item>

      <el-sub-menu index="/user-manage">
        <template #title>
          <el-icon><UserFilled /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user-manege/adduser">添加用户</el-menu-item>
        <el-menu-item index="/user-manege/addlist">用户列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/news-manege">
        <template #title>
          <el-icon><MessageBox /></el-icon>
          <span>新闻管理</span>
        </template>
        <el-menu-item index="/news-manege/addnews">创建新闻</el-menu-item>
        <el-menu-item index="/news-manege/newslist">新闻列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/product-manege">
        <template #title>
          <el-icon><reading/></el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/product-manege/addproduct">添加产品</el-menu-item>
        <el-menu-item index="/product-manege/productlist">产品列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
.el-aside {
  height: 100vh;
}
</style>
