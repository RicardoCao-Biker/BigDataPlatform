<template>
  <el-container>
    <el-header class="main_header">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的关注</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">数据中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">跳转管理</a>
        </el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      routerData: Object.freeze({
        1: "/introduce",
        3: "/data"
      })
    };
  },
  mounted() {},
  methods: {
    handleSelect(index) {
      console.log(this.routerData[index]);
      this.$router.push(this.routerData[index]);
    }
  }
};
</script>


<style scoped>
.main_header {
  width: 100%;
  border-bottom: 1px solid #dcdfe6;
}
.main_aside {
}
.el-menu-demo {
  float: right;
}
</style>