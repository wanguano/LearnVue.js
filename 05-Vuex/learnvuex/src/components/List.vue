<template>
  <div>
    List <br />
    父组件传递的歌手: {{ singer }}
    <button @click="btnClick">发射事件</button>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      songName: '成都',
    }
  },
  props: {
    singer: {
      type: String,
      default: '周杰伦',
    },
  },
  methods: {
    btnClick() {
      this.$emit('getSongName', this.songName)
    },
  },
}
</script>

<style scoped></style>
