<template>
  <div id="app">
    <h2>----------APP组件:Modules中内容---------</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">修改属性</button>
    <h3>{{$store.getters.fullName}}</h3>
    <h3>{{$store.getters.fullName2}}</h3>
    <button @click="asyncUpdateName">异步更新名字</button>

    <h2>------APP内容: info对象是否是响应式的---------</h2>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateStu">修改属性</button>

    <h2>----------APP组件---------</h2>
    <div>APP组件当前计数: {{$store.state.counter}}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">增加学生</button>

    <h2>------APP内容: getters相关信息---------</h2>
    <h3>{{$store.getters.powerCounter}}</h3>
    <h3>{{$store.getters.more20Stu}}</h3>
    <h3>{{$store.getters.more20StuLength}}</h3>
    <h3>{{$store.getters.moreAgeStu(8)}}</h3>

    <h2>----------Hello Vuex组件---------</h2>
    <hello-vuex></hello-vuex>

    <h2 class="text">-------------Map---------------</h2>
    <map-api></map-api>
    
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import Map from './components/Map'
import { INCREMENT } from './store/Mutations-type'
export default {
  name: 'App',
  methods: {
    add() {
      // commit提交更改公共state状态
      this.$store.commit(INCREMENT)
    },
    sub() {
      this.$store.commit('decrement')
    },
    //#region 提交mutation时传入参数
    addCount(count) {
      // payload: 负载
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStu() {
      let stuObj = { name: 'cloud', age: 30 }
      this.$store.commit('addStu', stuObj)
    },
    //#endregion

    //#region Mutation响应规则
    updateStu() {
      // this.$store.commit('updateStu')
      // this.$store.dispatch('updateStu', 'Action')

      // 如何执行当前的这个异步操作成功的状态? 函数通知=>对象=>promise
      // this.$store.dispatch('updateStu', () => {console.log('里面异步操作执行完毕')})
      // this.$store.dispatch('updateStu', {
      //   message: '我是附带的消息',
      //   success: () => {console.log('里面异步执行成功')}
      // })

      // 使用promise来查看异步操作是否成功
      this.$store.dispatch('updateStu')
        .then(value => {
          console.log(value)
        })
    },
    //#endregion
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('asyncUpdateName')
    }
  },
  components: {
    HelloVuex,
    mapApi: Map
  },
  computed: {
    filterStu() {
      return this.$store.state.students.filter(s => s.age > 20)
    }
  },
}
</script>

<style>
button {
  margin: 8px 15px 15px 0;
}
.btn {
  color: red;
}
</style>
