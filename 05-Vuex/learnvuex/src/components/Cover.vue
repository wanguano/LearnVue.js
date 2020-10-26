<template>
  <div>{{}}</div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    coverName: {
      type: String,
      default: '封面的默认名字',
      required: true,
    },
  },
}
</script>

<style scoped></style>
