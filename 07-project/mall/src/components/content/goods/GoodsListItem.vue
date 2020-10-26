<template>
  <div class="good-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="goodsImgLoad">
    <div class="good-info">
      <p>{{goodItem.title}}</p>
      <span class="good-price">{{goodItem.price}}</span>
      <span class="good-collect">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsImgLoad() {
      // 1.发射事件 (时间总线) 引入不止有Home组件监听这个事件还有Detail组件需要监听
      // 方案2: 都监听这个事件,然后在组建销毁或离开时解绑这个事件
      this.$bus.$emit('itemImgLoad')
      // 方案1: 根据当前路由发射不同的事件
      // if (this.$route.params.path.indexOf('/home')) {
      //   this.$bus.$emit('HomeItemImgLoad')
      // } else if (this.$route.params.path.indexOf('/detail')){
      //   this.$bus.$emit('DetailItemImgLoad')
      // }
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodItem.iid)
    }
  },
  computed: {
    showImg() {
      return this.goodItem.img || this.goodItem.image || this.goodItem.show.img 
    }
  },
}
</script>

<style scoped>
.good-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.good-item img {
  width: 100%;
  border-radius: 5px;
}
.good-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
  text-align: center;
  font-size: 12px;
}
.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.good-price {
  color: var(--color-high-text);
  margin-right: 23px;
}
.good-collect {
  position: relative;
}
.good-collect::before {
  position: absolute;
  left: -14px;
  bottom: 1px;
  content: '';
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  
}
</style>