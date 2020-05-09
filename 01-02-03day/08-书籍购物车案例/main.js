/**
 * 实现对对象数组的响应式更新,增加,减少,移除
 */
const app = new Vue({
  el: '#app',
  data: {
    books: [
    {
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    },
    {
      id: 2,
      name: '《UNIX编程艺术》',
      date: '2006-2',
      price: 59.00,
      count: 1
    },
    {
      id: 3,
      name: '《编程珠玑》',
      date: '2008-10',
      price: 39.00,
      count: 1
    },
    {
      id: 4,
      name: '《代码大全》',
      date: '2006-3',
      price: 128.00,
      count: 1
    }, ]
  },
  methods: {
    // getPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    remove(index) {
      this.books.splice(index, 1)
    },
  },
  computed: {
    getTotalPrice() {
      let total = 0;
      // this.books.forEach(item => {
      //   total += item.price * item.count
      // });

      // 1. 用for..in
      //  for (let index in this.books) {
      //   total += this.books[index].price * this.books[index].count;
      // }
      // return total;
      // 2. 用for..of
      // for (const item of this.books) {
      //   total += item.price * item.count
      // }
      // return total

      
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})