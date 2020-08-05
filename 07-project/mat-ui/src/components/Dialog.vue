<template>
  <transition name="dialog">
    <div class="mt-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="mt-dialog" :style="style">
        <div class="mt-dialog__header">
          <slot name="title">
            <span class="mt-dialog__title">{{title}}</span>
          </slot>
          <button class="mt-dialog__headerbtn" @click="handleClose">
            <i class="mt-icon-close"></i>
          </button>
        </div>
        <div class="mt-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="mt-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MtDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        marginTop: this.top
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  },
}
</script>

<style lang="scss">
// scoped会给当前所有组件中的所有元素都添加一个随机的属性
// scoped会给当前组件中所有样式 页都添加一个对应的属性选择器
.mt-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .mt-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .mt-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .mt-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .mt-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-enter-active {
  animation: fade 0.3s;
}
.dialog-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>