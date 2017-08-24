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
      <!-- v-for -->
    <ol>
      <!-- v-bind 简写 : -->
      <!-- 基本用法 -->
      <li v-for='(todo, index) in todos' v-bind:key='index'><!-- or todo of todos -->
        {{todo.text}}
      </li>
    </ol>
    <!-- v-for 对象迭代 -->
    <p>v-for对象迭代</p>
    <ul id="repeat-object">
      <li v-for="(value, key, index) in object" :key="index">
        {{value}} - {{key}} - {{index}}
      </li>
    </ul>
    <p>v-for整数迭代</p>
    <div>
      <span v-for="i in 10" :key='i'>{{i}} </span>
    </div>
    <!-- 绑定内联样式 -->
    <!-- 当 v-bind:style 使用需要特定前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。 -->
    <!-- 多重值 -->
    <!-- <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"> -->
    <!-- 最终渲染浏览器支持的值 -->
    <p :style="{color: msgColor, fontSize: fontSize + 'px'}">msg reverse: {{reverseMessage}}</p>
    <input type="text" v-model="msg">
    <!-- v-on 简写 @ -->
    <!-- 传递事件到函数，用$event -->
    <button @click="changeData($event)">changeData</button>
    <!-- 条件渲染 v-if -->
    <p v-if="ifStatus === 2">while ifStatus === 2, display me</p>
    <p v-else-if="ifStatus === 1">while ifStatus === 1, display me</p>
    <p v-else>else ,display me</p>
    <!-- key管理可复用元素 -->
    <p v-if="inputType === 'name'">
      <label>name</label>
      <input placeholder="enter your name">
    </p>
    <p v-else>
      <label>email</label>
      <input placeholder="enter your email">
    </p>
    <!-- 上面示例只替换input 的placeholder，不会清空input内容 -->
    <!-- Vue会尽可能的复用已有元素而不是从头渲染，若需要声明元素完全独立，不要复用，只需要添加一个具有唯一值的key -->
    <p v-if="inputType === 'name'">
      <label>name</label>
      <input placeholder="enter your name" key='name'>
    </p>
    <p v-else>
      <label>email</label>
      <input placeholder="enter your email" key='email'>
    </p>
    <!-- 上面示例中，label还是会被复用，因为没有key属性 -->
    <!-- v-show 元素始终会被渲染并保留在dom中，只是简单改变css属性display -->
    <!-- v-if vs v-show -->
    <!-- v-if 确保切换过程中条件块内的事件监听器和子组件适当被销毁和重建 -->
    <!-- v-if 惰性的，若初始渲染条件为假，什么也不做 -->
    <!-- v-show总是会被渲染 -->
    <!-- 一般来说，v-if有更高的切换开销。v-show有更高的初始渲染开销 -->
    <!-- 频繁切换用v-show -->
    <!-- v-for 优先级高于 v-if -->

    <!-- 表单 -->
    <p>多选框</p>
    <!-- 绑定到同一个数组checkedNames -->
      <input type="checkbox" id='name1' value='jie' v-model="checkedNames">
      <label for="name1">jie</label>
      <input type="checkbox" id='name2' value='ying' v-model="checkedNames">
      <label for="name2">ying</label>
      <input type="checkbox" id='name3' value='huan' v-model="checkedNames">
      <label for="name3">huan</label>
      <p>checked names: {{checkedNames}}</p>
    <p>单选</p>
    <p>
      <input type="radio" value ='One' v-model="picked"><label>one</label>
      <input type="radio" value ='Two' v-model="picked"><label>two</label></br>
      <span>picked: {{picked}}</span>
    </p>
    <p>选择列表</p>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>selected : {{selected}}</p>
  </main>
</template>

<script>
// import axios from axios;
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome xiaojie',
      msgColor: 'red',
      fontSize: 20,
      isReverse: !!0,
      ifStatus: 2,
      inputType: 'name',
      picked: '',
      todos: [
        { text: 'javascript' },
        { text: 'react' },
        { text: 'vue' }
      ],
      checkedNames: [],
      selected: '',
      object: {
        firstName: 'jie',
        lastName: 'xiao',
        age: '1'
      }
    }
  },
  created () { // 实例被创建后调用
    console.log(`ok this is ${this.msg}`)
  },
  mounted () {},
  updated () {},
  destroyed () {},
  methods: {
    changeData: function (event) {
      this.msg = this.msg.split('').reverse().join('')
      this.isReverse = !this.isReverse
      this.ifStatus = this.ifStatus % 3 + 1
      this.inputType = this.inputType === 'name' ? 'email' : 'name'
      if (event) {
        event.preventDefault()
        alert(event.target.tagName + ' clicked')
      }
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
  // https://cn.vuejs.org/v2/guide/components.html#Prop
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reserved {
  color: red;
}
</style>

