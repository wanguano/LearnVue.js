<template>
  <div>
     <h2>主页显示</h2> 
     <van-button type="primary" size="large">大号按钮</van-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "Home",
  setup() {
    const router = useRouter()
    const goToHome = () => router.push('Home')

    return {goToHome}
  }
}
</script>

<style scoped>

</style>