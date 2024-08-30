<script lang="ts" setup>
// 定义菜单项的类型
interface MenuRoute {
  path: string;
  meta?: {
    title?: string;
    icon?: string;
  };
  children?: MenuRoute[];
}

// 定义组件属性，以支持递归调用
defineProps<{
  accessibleRoutes: MenuRoute[];
  activeIndex: string;
}>();
</script>

<template>
  <!-- 遍历并渲染顶层菜单项 -->
  <template v-for="menuRoute in accessibleRoutes" :key="menuRoute.path">
    <!-- 如果有子菜单，递归调用自身 -->
    <el-sub-menu v-if="menuRoute.children && menuRoute.children.length" :index="menuRoute.path">
      <template #title>
        <i :class="menuRoute.meta?.icon || ''"></i>
        <span>{{ menuRoute.meta?.title || '未知菜单' }}</span>
      </template>
      <!-- 递归渲染子菜单项 -->
      <dynamic-menu
          :accessible-routes="menuRoute.children"
          :active-index="activeIndex"
      />
    </el-sub-menu>
    <!-- 渲染没有子菜单的普通菜单项 -->
    <el-menu-item v-else :index="menuRoute.path">
      <i :class="menuRoute.meta?.icon || ''"></i>
      <span>{{ menuRoute.meta?.title || '未知菜单' }}</span>
    </el-menu-item>
  </template>
</template>

<style scoped>
.el-menu-item i,
.el-sub-menu i {
  margin-right: 8px; /* 图标和文本的间距 */
}
</style>