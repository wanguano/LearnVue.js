<template>
  <div id="app">

    <mt-button @click="showDialog">按钮</mt-button>
    <mt-dialog title="温习提示" :visible.sync="visible">
      <template #default>默认内ww容</template>
      <template #footer>
        <mt-button @click="showDialog" type="primary">取消</mt-button>
        <mt-button @click="showDialog">确定</mt-button>
      </template>
    </mt-dialog>

    <!-- Vue中动画效果 1.添加name  2.设置类名 -->
    <!-- <transition name="aa">
      <div v-show="visible">Vue动画效果</div>
    </transition> -->

  </div>

</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      visible: false,
      money: 100
    }
  },
  methods: {
    handleClick(e) {
      console.log('1111')
    },
    showDialog() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
.raw {
  margin-bottom: 20px;
  .mt-button {
    margin-right: 20px !important;
  }
}
// 进入过渡的开始状态
// .aa-enter {
//   opacity: 0;
// }
// .aa-enter-to {
//   opacity: 1;
// }
// .aa-enter-active {
//   transition: all 0.3s;
// }
// .aa-leave {
//   opacity: 1;
// }
// .aa-leave-to {
//   opacity: 0;
// }
// .aa-leave-active {
//   transition: all 0.3s;
// }
// .aa-enter-active {
//   animation: fade .3s;
// }
// .aa-leave-active {
//   animation: fade .3s reverse;
// }
// @keyframes fade {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
</style>
