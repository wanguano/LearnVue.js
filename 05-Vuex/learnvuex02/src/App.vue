<template>
  <div id="app">
    <h2>----------APP组件内容----------</h2>
    <h3>APP组件计数:{{$store.state.count}}</h3>
    <h3>{{$store.getters.countPawer}}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <button @click="updateStu">添加属性</button>
    <button @click="asyncUpdateStu">异步添加属性</button>
    <h3>{{$store.state.info}}</h3>

    <h2>---------ModuleA-----</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">修改名字</button>
    <button @click="asyncName">异步修改名字</button>
    

    <h2>--------getters------------</h2>
    <h3>{{$store.getters.more20Stu}}</h3>
    <h3>{{$store.getters.more20StuLength}}</h3>
    <h3>{{$store.getters.countCustom(8)}}</h3>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloWorld'
import { INCREMENT } from './store/mutation_type'
import { DECREMENT } from './store/mutation_type'
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    increment() {
      // 修改state必须要经过mutation来提交事件
      this.$store.commit(INCREMENT)
    },
    decrement() {
      this.$store.commit(DECREMENT)
    },
    addCount(count) {
      this.$store.commit({
        type: 'addCount',
        count
      })
    },
    addStu() {
      this.$store.commit({
        type: 'addStu',
        newStu: { name: 'luke', age: 22 }
      })
    },
    updateStu() {
      this.$store.commit('updateStu')
    },
    asyncUpdateStu() {
      this.$store.dispatch('asyncUpdate')
        .then(
          value => {
            // 异步操作成功
            console.log(value)
            console.log('hahah')
          }
        )
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncName() {
      this.$store.dispatch('asyncName')
    }
  },
}
</script>

<style>
button {
  margin: 10px;
}
</style>
