<template>
  <div class="cart-bottom">
    <div class="all-select">
      <check-button :class="{checked: isCheck}" @click.native="isClick" />
      <span>全选</span>
    </div>
    <div class="cart-price">
      合计: <span class="real-price">￥{{totalPrice}}</span>
    </div>
    <div class="cart-calc" @click="toast">去结算({{itemLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'
export default {
  name: "",
  data() {
    return {
      isCheck: false,
    }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => item.checked)
        .reduce((preVal, item) => {
          return preVal + item.price * item.count
        }, 0)
    },
    itemLength() {
      return this.cartList.filter(item => item.checked).length
    },
  },
  methods: {
    isClick() {
      // 有商品
      if (this.cartList.length > 1) {
        let isSelect = !this.isCheck
        this.$store.state.cartList.map(item => {
          item.checked = isSelect
        })
        this.isCheck = isSelect
      } else {
        // 没有商品
        this.$toast.show('您还没有选择商品')
      }
    },
    toast() {
      if (!this.isCheck) this.$toast.show('您还没有选择商品')
    }
  },
  mounted() {
    // 1.监听事件总线
    this.$bus.$on('cartListClick', () => {
      let isAllSelect = false
      this.$store.state.cartList.some(item => {
        if (!item.checked) {
          isAllSelect = item.checked
          return true
        } else {
          isAllSelect = item.checked
        }
      })
      this.isCheck = isAllSelect
    })
  },
  // 2.当你全选完,点击商品列表又添加购物车时,还是显示全选
  // activated() {
  //   this.isCheck = false
  // },
}
</script>

<style scoped>
.cart-bottom {
  position: relative;
  display: flex;
  height: 40px;
  background: #eee;
  align-items: center;
}
.all-select {
  width: 60px;
  display: flex;
  margin-left: 20px;
  align-items: center;
}
.cart-price {
  flex: 1;
  margin-left: 22px;
}
.real-price {
  color: var(--color-tint);
}
.cart-calc {
  align-self: flex-end;
  width: 100px;
  height: 40px;
  background-color: #ff8457;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.checked {
  background: var(--color-tint);
}
</style>