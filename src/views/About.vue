<template>
  <div class="about">
    <div class="container">
      <h2 class="section-title">关于我们</h2>
      <p class="section-desc">
        后续填充关于页面的核心内容
      </p>
      <div class="about-content">
        <p>这里是关于页面的详细内容区域，你可以自由填充</p>
        <button class="btn btn-primary" @click="$router.push('/')">返回首页</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 后续可扩展逻辑
</script>

<style scoped>
.about {
  padding: 100px 0;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.about-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.8;
}
</style>