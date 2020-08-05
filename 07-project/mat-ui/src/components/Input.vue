<template>
  <div class="mt-input" :class="{'mt-input--suffix': showSuffix}">
    <span class="mt-input__suffix">
      <i class="mt-input__icon mt-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="mt-input__icon mt-icon-view" v-if="showPassword" @click="handlePassword" :class="{'icon-active': passwordVisible}"></i>
  </span>
    <input type="text" 
    class="mt-input__inner" 
    :placeholder="placeholder" 
    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :class="{'is-disabled': disabled}" 
    @input="handleInput"
    :value="value"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'MtInput',
  data() {
    return {
      // 是否显示密码
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input',e.target.value)
    },
    showSuffix() {
      return this.clearable || this.showPassword
    },
    clear() {
      this.$emit('input','')
    },
    handlePassword() {
      // 切换type类型
      this.passwordVisible = !this.passwordVisible
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    }
  },
}
</script>

<style lang="scss" >
.mt-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .mt-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.mt-input--suffix {
  .mt-input__inner {
    padding-right: 30px;
  }
  .mt-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .icon-active {
      color: #409eff;
    }
  }
}
</style>