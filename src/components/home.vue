<template>
  <div>
    <!-- Header -->
    <header id="header" class="alt">
      <span class="logo"><img src="../../src/assets/images/logo.svg" alt="" /></span>
      <h1>{{common.name}} {{common.title}}</h1>
      <h2>{{common.job}}</h2>
      <p>
        <span>E-mail</span>
        <a :href="common.email">{{common.email}}</a>
        <span>电话</span>
        <a href="/">{{common.mobile}}</a>
      </p>
    </header>
    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li><a href="#intro" class="active">个人简介</a></li>
        <li><a href="#first">掌握技能</a></li>
        <li><a href="#second">部分案例</a></li>
        <li><a href="#cta">联系方式</a></li>
      </ul>
    </nav>
    <!-- Main -->
    <div id="main">
      <!-- Introduction -->
        <section id="intro" class="main">
          <div class="spotlight">
            <div class="content">
              <header class="major">
                <h2>我的简历</h2>
              </header>
              <p>前端小白一枚</p>
              <ul class="actions">
                <li><a href="generic.html" class="button">更多</a></li>
              </ul>
            </div>
            <span class="image"><img src="../../src/assets/images/pic01.jpg" alt="" /></span>
          </div>
        </section>
      <!-- First Section -->
        <section id="first" class="main special">
          <header class="major">
            <h2>技能掌握</h2>
          </header>
          <ul class="statistics">
            <li class="style1">
              <span class="iconfont js"></span>
              <strong>javascript</strong> ECMA2015/ES6
            </li>
            <li class="style2">
              <span class="iconfont h5"></span>
              <strong>HTML</strong> html5
            </li>
            <li class="style3">
              <span class="iconfont css3"></span>
              <strong>CSS</strong> css3.0
            </li>
            <li class="style4">
              <span class="iconfont iconVue"></span>
              <strong>Vue</strong> Vue$vue-router$Vuex
            </li>
          </ul>
          <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
            posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
          <footer class="major">
            <ul class="actions special">
              <li><a href="generic.html" class="button">Learn More</a></li>
            </ul>
          </footer>
        </section>
      <!-- Second Section -->
        <section id="second" class="main special">
          <header class="major">
            <h2>部分案例</h2>
          </header>
          <ul class="features">
            <li>
              <span class="icon major style1 fa-code"></span>
              <h3>Ipsum consequat</h3>
              <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
            </li>
            <li>
              <span class="icon major style3 fa-copy"></span>
              <h3>Amed sed feugiat</h3>
              <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
            </li>
            <li>
              <span class="icon major style5 fa-diamond"></span>
              <h3>Dolor nullam</h3>
              <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
            </li>
          </ul>
          <p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
          <footer class="major">
            <ul class="actions special">
              <li><a href="generic.html" class="button">Learn More</a></li>
            </ul>
          </footer>
        </section>
      <!-- Get Started -->
        <section id="cta" class="main special">
          <header class="major">
            <h2>联系方式</h2>
            <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
            posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
          </header>
          <footer class="major">
            <ul class="actions special">
              <li><a href="generic.html" class="button primary">Get Started</a></li>
              <li><a href="generic.html" class="button">Learn More</a></li>
            </ul>
          </footer>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      common: {
        name: 'Terry’s',
        title: '个人简历',
        job: 'web前端工程师',
        email: 'depn666@gmail.com',
        mobile: '(0063)9672340668'
      }
    }
  },
  methods: {
  }
}
</script>
