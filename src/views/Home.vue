<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav class="navbar" :class="{ 'navbar-fixed': isNavFixed }">
      <div class="container">
        <div class="navbar-logo">
          <h2>东北亚视界</h2>
        </div>
        <ul class="navbar-menu">
          <li><a href="#overview" class="nav-link">区域总览</a></li>
          <li><a href="#countries" class="nav-link">国家/地区</a></li>
          <li><a href="#culture" class="nav-link">文化特色</a></li>
          <li><a href="#economy" class="nav-link">经济发展</a></li>
          <li><a href="#contact" class="nav-link">关于我们</a></li>
        </ul>
        <button class="navbar-toggle" @click="isMenuOpen = !isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <!-- 移动端菜单 -->
      <div class="mobile-menu" v-show="isMenuOpen">
        <ul>
          <li><a href="#overview" @click="isMenuOpen = false">区域总览</a></li>
          <li><a href="#countries" @click="isMenuOpen = false">国家/地区</a></li>
          <li><a href="#culture" @click="isMenuOpen = false">文化特色</a></li>
          <li><a href="#economy" @click="isMenuOpen = false">经济发展</a></li>
          <li><a href="#contact" @click="isMenuOpen = false">关于我们</a></li>
        </ul>
      </div>
    </nav>

    <!-- 英雄区 -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1 class="animate__animated animate__fadeInDown">东北亚 · 多元共生</h1>
        <p class="animate__animated animate__fadeInUp animate__delay-1s">
          探索这片土地的历史、文化与未来
        </p>
        <button class="btn btn-primary animate__animated animate__fadeInUp animate__delay-2s" @click="scrollToSection('overview')">
          开始探索
        </button>
      </div>
    </section>

    <!-- 区域总览 -->
    <section id="overview" class="section overview">
      <div class="container">
        <h2 class="section-title">区域总览</h2>
        <p class="section-desc">
          东北亚涵盖多个国家和地区，拥有丰富的自然资源、悠久的历史文化和独特的地缘格局
        </p>
        <div class="overview-card" ref="revealElements">
          <div class="overview-card-item">
            <div class="icon-box">🌍</div>
            <h3>地理范围</h3>
            <p>填充地理范围相关内容</p>
          </div>
          <div class="overview-card-item">
            <div class="icon-box">👥</div>
            <h3>人口概况</h3>
            <p>填充人口概况相关内容</p>
          </div>
          <div class="overview-card-item">
            <div class="icon-box">🗺️</div>
            <h3>地缘优势</h3>
            <p>填充地缘优势相关内容</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 国家/地区 -->
    <section id="countries" class="section countries">
      <div class="container">
        <h2 class="section-title">国家/地区</h2>
        <p class="section-desc">
          东北亚包含多个核心国家和地区，每个区域都有其独特的风貌与特色
        </p>
        <div class="countries-grid" ref="revealElements">
          <div class="country-card" v-for="(item, index) in 4" :key="index">
            <div class="country-card-img">
              <!-- 占位图，后续替换为实际图片 -->
              <div class="img-placeholder"></div>
            </div>
            <div class="country-card-content">
              <h3>国家/地区名称 {{ index + 1 }}</h3>
              <p>填充该区域的核心介绍内容</p>
              <a href="#" class="btn btn-outline">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 文化特色 -->
    <section id="culture" class="section culture">
      <div class="container">
        <h2 class="section-title">文化特色</h2>
        <p class="section-desc">
          多元文化交融，形成了东北亚独有的文化魅力与精神内核
        </p>
        <div class="culture-slider" ref="revealElements">
          <div class="culture-slide" v-for="(item, index) in 3" :key="index">
            <h3>文化类别 {{ index + 1 }}</h3>
            <p>填充该文化类别的详细介绍</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 经济发展 -->
    <section id="economy" class="section economy">
      <div class="container">
        <h2 class="section-title">经济发展</h2>
        <p class="section-desc">
          依托资源与区位优势，东北亚成为全球经济发展的重要增长极
        </p>
        <div class="economy-stats" ref="revealElements">
          <div class="stat-item">
            <div class="stat-number" ref="statNumber">0</div>
            <p>经济总量（亿美元）</p>
          </div>
          <div class="stat-item">
            <div class="stat-number" ref="statNumber">0</div>
            <p>贸易总额（亿美元）</p>
          </div>
          <div class="stat-item">
            <div class="stat-number" ref="statNumber">0</div>
            <p>GDP增长率（%）</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系/关于 -->
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">关于我们</h2>
        <p class="section-desc">
          致力于传播东北亚区域文化与发展，搭建交流与合作的桥梁
        </p>
        <div class="contact-form" ref="revealElements">
          <form>
            <div class="form-group">
              <input type="text" placeholder="您的姓名" />
            </div>
            <div class="form-group">
              <input type="email" placeholder="您的邮箱" />
            </div>
            <div class="form-group">
              <textarea placeholder="您的留言"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">提交</button>
          </form>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-logo">
            <h2>东北亚视界</h2>
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#overview">区域总览</a></li>
              <li><a href="#countries">国家/地区</a></li>
              <li><a href="#culture">文化特色</a></li>
              <li><a href="#economy">经济发展</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 东北亚视界 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import ScrollReveal from 'scrollreveal'

// 导航栏状态
const isNavFixed = ref(false)
const isMenuOpen = ref(false)

// 滚动监听：导航栏吸顶变色
const handleScroll = () => {
  isNavFixed.value = window.scrollY > 50
}

// 滚动到指定区域
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 滚动渐显效果
const revealElements = ref([])
let sr = null

// 数字滚动效果
const statNumber = ref([])
const animateNumber = (el, target) => {
  let current = 0
  const step = Math.ceil(target / 50)
  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    el.textContent = current.toLocaleString()
  }, 30)
}

onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll)

  // 初始化滚动渐显
  sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 100,
    reset: false
  })
  
  // 为所有标记的元素添加渐显效果
  revealElements.value.forEach(el => {
    if (el) sr.reveal(el)
  })

  // 数字滚动动画（示例值，后续替换为实际数据）
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumber.value.forEach(el => {
          if (el) {
            // 随机示例值，后续替换
            const randomNum = Math.floor(Math.random() * 10000) + 5000
            animateNumber(el, randomNum)
          }
        })
        observer.disconnect()
      }
    })
  })
  
  if (statNumber.value[0]) {
    observer.observe(statNumber.value[0])
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (sr) sr.destroy()
})
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: transparent;
  color: white;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.navbar-fixed {
  background: white;
  color: #333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo h2 {
  font-size: 24px;
  font-weight: 700;
}

.navbar-menu {
  display: flex;
  gap: 30px;
}

.nav-link {
  font-weight: 500;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #165DFF;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.navbar-toggle span {
  width: 24px;
  height: 2px;
  background: currentColor;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background: white;
  color: #333;
  padding: 20px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

/* 英雄区样式 */
.hero {
  height: 100vh;
  background: url('https://picsum.photos/1920/1080?random=1') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
}

.hero-content h1 {
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 24px;
  margin-bottom: 40px;
  opacity: 0.9;
}

/* 通用区块样式 */
.section {
  padding: 100px 0;
}

/* 区域总览 */
.overview-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.overview-card-item {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.overview-card-item:hover {
  transform: translateY(-10px);
}

.icon-box {
  font-size: 48px;
  margin-bottom: 20px;
}

.overview-card-item h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #165DFF;
}

.overview-card-item p {
  color: #666;
  line-height: 1.6;
}

/* 国家/地区 */
.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.country-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.country-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.img-placeholder {
  width: 100%;
  height: 200px;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.country-card-content {
  padding: 30px;
}

.country-card-content h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.country-card-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* 文化特色 */
.culture {
  background: #f8f9fa;
}

.culture-slider {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.culture-slide {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.culture-slide h3 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #165DFF;
}

.culture-slide p {
  color: #666;
  line-height: 1.6;
}

/* 经济发展 */
.economy-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  text-align: center;
}

.stat-item {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #165DFF;
  margin-bottom: 15px;
}

.stat-item p {
  font-size: 18px;
  color: #666;
}

/* 联系/关于 */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: #165DFF;
}

.form-group textarea {
  height: 150px;
  resize: none;
}

/* 页脚样式 */
.footer {
  background: #1f2937;
  color: white;
  padding: 60px 0 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links ul {
  display: flex;
  gap: 30px;
}

.footer-links a {
  color: #d1d5db;
}

.footer-links a:hover {
  color: #165DFF;
}

.footer-bottom {
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
}

/* 响应式适配 */
@media (max-width: 992px) {
  .overview-card, .culture-slider, .economy-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-content h1 {
    font-size: 48px;
  }
  .hero-content p {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
  .navbar-toggle {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
  .overview-card, .culture-slider, .economy-stats {
    grid-template-columns: 1fr;
  }
  .hero-content h1 {
    font-size: 36px;
  }
  .hero-content p {
    font-size: 18px;
  }
  .section {
    padding: 60px 0;
  }
  .footer-top {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  .footer-links ul {
    flex-direction: column;
    gap: 15px;
  }
/* 页脚样式 */
.footer-bottom {
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
}

/* 响应式适配 */
@media (max-width: 768px) {
  /* 已有的响应式样式 */
}}
</style> <!-- 新增这一行闭合标签 -->