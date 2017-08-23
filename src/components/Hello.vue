<template>
  <main>
    <!-- 可以传给v-bind:class 一个对象，动态切换class -->
    <!-- 对象语法 -->
    <!-- v-bind:class="{active: isActive}"  // data: {isActive: true} ==> class="active"-->
    <!-- v-bind:class="{active: isActive, 'text-danger': isError}" // data: {isActive: false, isError: true} ==> class="text-danger" -->
    <!-- 还可以与普通的class属性共存，即元素自己的class -->
    <!-- 数组语法 -->
    <!-- v-bind:class="[activeClass, errorClass]" // data: {activeClass: 'active', errorClass: 'text-danger'} ==> class="active text-danger" -->
    <!-- 三元表达式： v-bind:class="[isActive ? activeClass : '', errorClass]" -->
    <h2 class='text-center' :class="[isReverse ? 'reserved' : '']">{{ msg }}</h2>
    <ol>
      <!-- v-bind 简写 : -->
      <li v-for='(todo, index) in todos' v-bind:key='index'>
        {{todo.text}}
      </li>
    </ol>
    <p>msg reverse: {{reverseMessage}}</p>
    <input type="text" v-model="msg">
    <!-- v-on 简写 @ -->
    <button @click="reverseMsg">reverse</button>
  </main>
</template>

<script>
// import axios from axios;
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome xiaojie',
      isReverse: !!0,
      todos: [
        { text: 'javascript' },
        { text: 'react' },
        { text: 'vue' }
      ]
    }
  },
  created () { // 实例被创建后调用
    console.log(`ok this is ${this.msg}`)
  },
  mounted () {},
  updated () {},
  destroyed () {},
  methods: {
    reverseMsg: function () {
      this.msg = this.msg.split('').reverse().join('')
      this.isReverse = !this.isReverse
    }
  },
  // 过滤器
  filters: {
    xxx: function () {}
  },
  // 计算属性 vs methods：计算属性是基于它们的依赖进行缓存的，只有在相关依赖发生改变才会重新求值
  // 相比而言，只要发生重新渲染，methods调用总会执行该函数
  // 所以如果不希望缓存，用methods

  // 计算属性
  // 计算属性默认只有getter,需要的时候也可以提供一个setter
  computed: {
    // text: {
    //   get: function () {
    //     return this.msg + '123'
    //   }
    //   set: function (val) {
    //     this.text = this.text + val;
    //   }
    //   运行text时，setter会被调用，响应的值也会被更新
    // },
    reverseMessage: function () {
      return this.msg.split('').reverse().join('')
    }
  },
  // 观察和响应vue实例上的数据变动。有一些数据需要随着其他数据变动而变动，而更好的方法是用computed
  // 使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态.
  // 这是计算属性无法做到的
  watch: {
    // msg: function (val) {
    //   this.text = val + this.msg
    // }
  }
}
// https://cn.vuejs.org/v2/guide/class-and-style.html#用在组件上
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reserved {
  color: red;
}
</style>

