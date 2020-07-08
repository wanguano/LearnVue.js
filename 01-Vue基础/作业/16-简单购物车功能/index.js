// 先渲染数据
// 1.根据商品选中情况,显示总价 (判断是否选择,总结=单价*数量)
// 2.数量1禁用-按钮, + 和 - 功能完成, 数量的增加和价格的增加
// 3.实现移除功能全部移除,显示购物车没有商品
// 4.全选,获取到全选按钮状态,然后根据全选按钮状态,来确定下面子按钮的状态
// 5.子按钮选中状态功能,添加点击事件,在改变状态后将对应的对象中的check状态也做出相应的改变 (可以响应式更新总价的数据)
const vm = new Vue({
  el: '#app',
  data: {
    list: [
    {
      id: 1,
      name: 'iPhone 7',
      price: 6188,
      count: 1,
      check: true,
    },
    {
      id: 2,
      name: 'iPad Pro',
      price: 5888,
      count: 1,
      check: false,
    },
    {
      id: 3,
      name: 'MacBook Pro',
      price: 21488,
      count: 1,
      check: true,
    }, ],
  },
  methods: {
    increment(index) {
      this.list[index].count++
    },
    decrement(index) {
      this.list[index].count--
    },
    remove(index) {
      this.list.splice(index, 1)
    },
    selectAll() {
      let isAll = document.querySelector('#all')
      if (isAll.checked == true) {
        this.list.forEach(function (item, index) {
          item.check = true;
        })
      } else {
        this.list.forEach(function (item, index) {
          item.check = false;
        })
      }
    }
  },
  computed: {
    totalPrices() {
      let totalPrices = 0
      /**
       * 根据当前遍历的对象判断是否选中状态,去显示总价
       */
      this.list.forEach(val => {
        if (val.check) totalPrices += parseFloat(val.price * val.count)
      })
      return totalPrices.toString().replace(/\B(?=(\d{3})+$)/g, ','); //每三位数中间加一个‘，'
    }
  },
})