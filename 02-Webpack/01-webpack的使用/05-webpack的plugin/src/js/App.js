export default {
  template: `
  <div>
    <div>{{message}}</div>
    <button @click="btnClick">按钮</button>
    <div>{{name}}</div>
  </div>
`,
  data() {
    return {
      message: '我是data中的消息',
      name: 'wanguan'
    }
  },
  methods: {
    btnClick() {
      console.log('被点击了');
    }
  },
}