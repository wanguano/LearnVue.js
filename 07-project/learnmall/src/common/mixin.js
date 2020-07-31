// 工具函数
import { debounce } from 'common/utils'
export const imgLoadMixin = {
    data() {
        return {
            busImgLoad: null
        }
    },
    mounted() {
        // 1.监听事件总线(进行防抖操作)
        let refresh = debounce(this.$refs.scroll.refresh)
        this.busImgLoad = () => {
            // 调用scroll的refresh刷新scroll的高低
            refresh()
        }
        this.$bus.$on('imgLoad', this.busImgLoad)
    }
}