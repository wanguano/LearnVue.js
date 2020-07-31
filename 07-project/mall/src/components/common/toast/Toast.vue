<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '默认消息', delay = 1500) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, delay);
    }
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.76);
  color: #fff;
}
</style>