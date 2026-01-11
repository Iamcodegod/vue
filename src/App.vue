<template>
  <div id="app">
    <header class="header">
      <h1>Vue + GitHub Pages 部署示例</h1>
    </header>
    <main class="content">
      <p>这是部署到 GitHub Pages 的 Vue 项目框架</p>
      <button @click="count++">点击计数: {{ count }}</button>
    </main>
    <footer class="footer">
      <p>部署成功！</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 简单的响应式数据示例
const count = ref(0)
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header h1 {
  color: #42b983;
}

.content button {
  padding: 10px 20px;
  margin: 20px 0;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.content button:hover {
  background: #359469;
}

.footer {
  margin-top: 40px;
  color: #666;
}
</style>