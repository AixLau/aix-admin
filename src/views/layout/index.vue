<script lang="ts" setup>
// 从 Pinia 获取权限状态
const permissionStore = usePermissionStore();

// 获取当前路由，用于菜单项激活状态
const route = useRoute();

// 计算可访问的路由，用于动态生成菜单
const accessibleRoutes = computed(() => permissionStore.routes);

// 当前激活的菜单项索引
const activeIndex = computed(() => route.path);
</script>

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <el-menu
        :default-active="activeIndex"
        active-text-color="#eeeeee"
        background-color="#1c4081"
        class="layout_slider"
        router
        text-color="#f9f9fa"
    >
      <DynamicMenu :accessibleRoutes="accessibleRoutes" :activeIndex="activeIndex"/>
    </el-menu>

    <!-- 右侧主内容区域 -->
    <div class="layout_right">
      <!-- 顶部导航 -->
      <div class="layout_tab">
        <p>顶部导航</p>
      </div>

      <!-- 主内容区域 -->
      <div class="layout_main">
        <p>这是主内容区域。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 整个布局容器，使用 flex 排列子元素 */
.layout_container {
  display: flex;
  height: 100vh; /* 占满整个视窗高度 */
}

/* 左侧菜单栏样式 */
.layout_slider {
  width: 200px; /* 固定宽度的侧边栏 */
  background-color: #1c4081; /* 深色背景 */
  color: #fff; /* 文字颜色为白色 */
  box-sizing: border-box; /* 包含内边距在宽度内 */
  overflow-y: auto; /* 内容溢出时添加滚动条 */
}

/* 右侧主内容区域，包括顶部导航和主内容 */
.layout_right {
  flex: 1; /* 占据剩余空间 */
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
}

/* 顶部导航样式 */
.layout_tab {
  height: 60px; /* 固定高度 */
  background-color: #ecf0f1; /* 浅色背景 */
  padding: 10px; /* 内边距 */
  box-sizing: border-box; /* 包含内边距在高度内 */
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 水平分散对齐 */
}

/* 主内容区域样式 */
.layout_main {
  flex: 1; /* 占据剩余的垂直空间 */
  background-color: #fff; /* 白色背景 */
  padding: 20px; /* 内边距 */
  box-sizing: border-box; /* 包含内边距在高度内 */
  overflow-y: auto; /* 内容溢出时添加滚动条 */
}
</style>