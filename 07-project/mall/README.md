# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


--------------------------------------

### 1.项目初始设置

#### 1.1 目录结构

- components (放一些公共组件) 
  - common(跟业务没有关系, 可以拖到另一个项目直接用的, 完全独立的组件)
  - content
- assets
  - img 
  - css
- views
  - home 
  - category
- router
- store
- network
- common 



#### 1.2设置CSS初始化和全局样式

- normalize.css
- base.css



#### 1.3配置路径别名

- vue.config.js

  - @
  - views
  - component
  - network
  - common

- 配置代码规范:

  - vue react angular 开发多人协作, 代码规范 

  - 想一想很多人代码缩进2行, 有些人是3行, 维护代码会非常难

  -   `.editorconfig` (重要)

    



#### 1.4 tabbar的封装

- <details>
  <summary><b>将组件和图片复制过来, 分配目录结构</b></summary><img src="https://gitee.com/xmkm/cloudPic/raw/master/img/20200717214452.png"/>
  </details>

- <font color='red'>千万注意路径问题, 和报错信息</font> 

-  复制 views 目录

- 配置 Router 路由映射  导入 Main.js

- 设置组件懒加载

- 启动项目

- favicon 偏爱图标



#### 1.5 navbar封装

- navbar 头部封装  (预留三个具名插槽)
  - flex 布局    中经居中,文字居中    行高44    两侧宽60
- 轮播图片, axios 发送请求
  - 在 Home 组件被创建生命周期函数中, 发送请求, 接收到 data 声明的数组当中
  - 对axios请求进行<font color='red'>二次封装</font>, 封装成一个对应请求的 JS 文件
  - 以后这个 home 组件的所有请求, 直接调用封装对应的 JS 文件即可
  - 将请求的数据保存在data中定义的数组中
- 开始展示轮播图
  - 复制组件到common, 导入
  - 开始进行二次封装, 将swiper放到childComps文件夹中再次导入



#### 1.6 recommend组和feature组件

- recommend组件: 封装, props 传递 recommend 数组, 遍历, 添加样式
- feature组件: 封装好 [超链接](https://act.mogujie.com/zzlx67) 和 image组件, 头部固定定位



#### 1.7 tab-control

-  tab-control组件:  components->conent
  - 如果只是文字的话, 不建议使用插槽, porp传递数组即可
  - 点击 cantrol 当前高亮显示文字 和 下边框
  - tab-cintrol 固定, css两个属性搞定 sticky & top





### 2.首页商品数据的请求

#### 1 goods商品列表组件

- 设计数据结构, 用于保存数据

```js
goods: {
    pop: page/list
    new: page/list
    sell: page/list
}
```



#### 2.发送数据请求

- 发送数据请求, 传递参数 type 和 page, 保存商品数据
  - 在 created 中进行二次封装, 封装到 methods 中
  - type 和 page 是动态获取的: page 页是从 0 开始的, 所以需要一个临时变量 + 1, 最后将自身页码数 + 1
- 封装 GoodsList 和 GoodsLsitItem组件  由于和业务有关, 就放在 content 中
  - GoodsList 遍历 GoodsLsitItem组件, 并将遍历的 item 通过porps传递给GoodsLsitItem
  - 在GoodsLsitItem中拿到对象对象并且渲染当前对象上的图片和标题等, 排版 CSS
  - 动态的更新商品列表: 通过`$emit`获取子组件点击的索引, 根据索引对应的值给 data 定义的currentType 动态赋值, 将值使用computed起来, 避免模板中逻辑过多



### 3.better-scroll

- 安装: better-scroll
  - 在 category 中演示

```js
// html
<div class="wrapper">
      <ul class="content">
        <li>分类1</li>
        <li>分类2</li>
		....
      </ul>
  </div>
// monted
new BScroll('el',{})
// css
.content {
  height: 400px;
  background: red;
}
```

- 新建一个 index.html 来测试BetterScroll
- 1.监听滚动
  * probeType: 0/1/2(手指滚动)/3(只要是滚动)
  * bscroll .on('scroll', (position) => {})
- 2.上拉加载
  * pullUpLoad: true
  * bscroll .on('pullingUp', () => {})
- 3.click: false
  * button可以监听点击
  * div不可以

```js
  /**
   * 默认情况BScroll是不可实时的监听滚动位置
   * probe 侦测
   * 0,1都是不侦测实时的位置
   * 2: 在手指滚动的过程中侦测, 手指离开后的惯性移动不侦测
   * 3: 只要是滚动, 都侦测
   */
  const bscroll = new BScroll(document.querySelector('.wrapper'), {
    probeType: 3,
    click: true,
    pullUpLoad: true
  })

  // 监听滚动,获取当前坐标
  bscroll.on('scroll', (position) => {
    // console.log(position) // => {top: xx, left: xxx}
  })

  // 上拉加载更多,拉到底部触发
  bscroll.on('pullingUp', () => {
    console.log('上拉加载更多')
    // 发送网络请求,请求更多页数据

    // 数据请求完成, 并且将新的数据展示出来后
    setTimeout(() => {
      bscroll.finishPullUp()
    }, 2000);
  })
```



#### 1.将 BetterScroll 进行二次封装

- 不建议: 
  -  将BetterScroll 直接引用, 建议进行二次封装, 以后如果要修改直接修改二次封装的vue文件即可
  - 不建议使用`document.querySelector`来获取元素, 因为如果多个组件内也有这个类名的话会<font color='red'>不明确</font>获取的到底是哪个`wrapper` 
  - ref如果绑定在组件中的, 那么通过`this.$refs.rename`获取到的是一个组件对象
  - ref如果绑定在普通的元素中, 那么通过`this.refs.refname`获取到的是一个DOM元素
- BetterScroll 封装到 Common 文件夹中scroll, 因为别的项目也可以使用 【注意插槽问题(wrapper -> content)】



#### 2.回到顶部BackTop

- BackTop组件 , 上箭头图片 【固定定位图片】
  - 给组件注册点击事件， 回到顶部
    - 修饰.native修饰什么时候使用:  监听组件原生点击
  - 调用scroll组件中 data中 scroll对象`scroll.scrollTo(x,y,time)`来返回顶部
- 几个小问题
  - 在 scroll 中如果点击是的 button 的话不论click是否设置为trun都是可以点击的, 如果是 div 那么必须设置 click 为true
  - 有的时候样式不对, 你确定逻辑没有错的话, 可以重启项目查看
- 监听滚动
  - 监听滚动坐标, 因为不是所有的组件用scroll都需要监听滚动, 需通过 props 传递给 batter-scorll , `probeType`来控制是否监听滚动
  - 在 profile 中使用 scroll 组件, 不传递 probeType 来测试
  - 通过 v-show 来控制什么时候显示和隐藏, 在home组件中通过获取 scroll 发射的事件获取坐标信息
- 上拉加载更多
  - *pullUpLoad* 通过 pops 传递给 scrool 组件, 告诉scroll组件, 监听下拉到底触发`pullingUp`事件, 在通过自定义事件传递给父组件, 告诉父组件到底部了
  - 调用封装好的`getHomeGoods`函数, 传递当前的`GoodsType` ,
  - 继续上拉加载更多调用`scroll`中的`finishPullUp`方法, 放在`getHomeGoods.then`中



### 4.解决首页中Better-Scroll可滚动区域的问题

* Better-Scroll在决定有多少区域可以滚动时, 是根据scrollerHeight属性决定
  * scrollerHeight属性是根据放Better-Scroll的content中的子组件的高度
  * 但是我们的首页中, 刚开始在计算scrollerHeight属性时, 是没有将图片计算在内的
  * 所以, 计算出来的告诉是错误的(1300+)
  * 后来图片加载进来之后有了新的高度, 但是scrollerHeight属性并没有进行更新.
  * 所以滚动出现了问题
  
* 如何解决这个问题了?
  
  * 监听每一张图片是否加载完成, 只要有一张图片加载完成了, 执行一次`refresh()`
  * 如何监听图片加载完成了?
    * 原生的js监听图片: img.onload = function() {}
    * Vue中监听: @load='方法'
  * 调用scroll的refresh()
  
* 如何将GoodsListItem.vue中的事件传入到Home.vue中
  * 因为涉及到非父子组件的通信, 所以这里我们选择了**事件总线**
    * bus ->总线
    * Vue.prototype.$bus = new Vue()
    * this.$bus.\$emit('事件名称', 参数)
    * this.\$bus.$on('事件名称', 回调函数(参数))
  * 问题一: r**efresh找不到的问题**
    * 第一: 在Scroll.vue中, 调用this.scroll的方法之前, 判断this.scroll对象是否有值 **(逻辑与)**
    * 第二: 在mounted生命周期函数中使用 this.$refs.scroll而不是created中
  
* 对于refresh非常频繁的问题, 进行防抖操作

  * 防抖debounce节流throttle

    * 防抖: 延迟要执行的动作, 若在这段时间再次被触发了, 则取消上一次开启的动作, 重新计时
    * 节流: 设定一个特定的时间, 让函数在特定的时间内只执行一次, 不会频繁执行

  * 项目中防抖起作用的过程: 

    * 如果我们直接执行refresh, 那么refresh函数会被执行30次

    * 可以将refresh函数传入到debounce函数中, 生成一个新的函数

    * 之后在调用非常频繁的时候,就使用新生成的函数

    * 而新生成的函数,并不会非常燥繁的调用,如果下一次执行来的非常快,那么会将上一次取消

      ```js
      // 函数防抖: 解决refresh频繁刷新
      debounce(func, delay) {
        let timer = null
        return function (...arg) {
          if (timer) clearInterval(timer)
          timer = setTimeout(() => {
            func.apply(this, arg)
          }, delay)
        }
      }
      ```

  - 将 防抖函数 放入公共JS文件, 导出

  




### 5.上拉加载更多功能

- 上拉加载更多
  - *pullUpLoad* 通过 pops 传递给 scrool 组件, 告诉scroll组件, 监听下拉到底触发`pullingUp`事件, 在通过自定义事件传递给父组件, 告诉父组件到底部了
  - 调用封装好的`getHomeGoods`函数, 传递当前的`GoodsType` ,
  - 继续上拉加载更多调用`scroll`中的`finishPullUp`方法, 放在`getHomeGoods.then`中




### 6.tabControl的吸顶效果

#### 1.获取到tabControl的offsetTopl

  必须知道滚动到多少时,开始有吸顶效果

- 通过 $ref获取 \$el DOM对象, 获取到 tabControl 的 offsetTop 不准确的问题: 
  - 最主要的是因为 网络请求的 图片, 高度还没有撑开, 就获取tabControl高度
  - 监听 home-swiper 组件中的图片, 是否加载完成, 发射事件给父组件进行获取tabControl高度
  - 因为不需要发射四次事件, 一次就够了, 所以定义一个变量来控制, 只发射一次事件




#### 2.监听滚动,动态的改变tabControl的样式

- 补充: 可以将头部导航取消fixed定位, 因为现在已经不使用原生进行滚动了
- 在 scroll 中滚动时, 大于了 tabControl 的offsetTop值, 让tabControl固定定位
  - 在data定义一个变量用来决定是否固定tabControl定位
  - 然后在 scroll 滚动事件中: 当滚动等于tabControl的offsetTop时,改变isControlFixed为true
  - 然后动态绑定class, 根据isControlFixed, 来决定固定定位, 然后你会发现行不通
- 复制一份tabControl然后, 根据isControlFixed来决定是否显示和隐藏
  - 相对定位 + z-Inde + 背景色
- 点击固定tab-control组件新款后, 回到顶部会发现, 之前没有固定的 tab-control 还是流行高亮显示
  - 解决方案: 在 itemClick中(就是tab-control的点击事件中), 同步数据(在两个组件中赋值属性): currentIndex 赋值



### 7.让Home保持原来的状态

#### 1.让Home不要随意销毁掉

- keep-alive

#### 2.让Home中的内容保持原来的位置

- `deactivated`离开时,保存一个位置信息saveY.
- `activated`进来时,将位置设置为离开时保存的位置saveY信息即可: `scrollTo(x,y,time)`
  - 注意:最好回来时,进行一次refresh()

#### 3.better-scroll问题

- npm uninstall better-scroll
- npm i better-scroll@1.13.2 --S



### 8.详情页

- 需求1: 点击goodsItem跳转到对应详情页
  - 创建详情页组件, 配置对应的路由
  - 给goodsItem添加点击事件, 跳转到详情页
  - 并且传递 queryString , 传递 iid
- 需求2: 头部导航封装
  - 复用之前的nav-bar, 但比较复杂, 所以组件再进行封装
  - 使用预留的 left 和 center 插槽, 遍历titles数组,然后均等分,flex布局,调整文字大小
  - 添加点击事件,然后高亮显示文字,动态绑定class
  - 左键头添加点击事件: 返回上一次页面 `route.back()`
- 需求3: 展示轮播图
  - 封装detail网络请求, 传递iid返回对应的数据, 分析数据, 将轮播图片地址保存到data中
  - 导入Swiper和SwiperItem, 封装detailSwiper, 将轮播图地址通过porps传递进入, 展示轮播图, 修改尺寸
  - 一个问题: 点击别的商品item, 进入的detaile显示的轮播图片没有更换
    - 原因: keep-alive 将所有 router-view全部缓存了
    - 解决: 排除detail -> exclude
    - 遇到个坑:  **exclude 匹配的字符串是 Vue 组件中的 name 属性, 没有配置不会生效排除缓存** 
  - <font color='red'>待解决的问题: 自动返回顶部问题</font>
  - 解决方案: `this.$refs.scroll.backTop(0, this.saveHistoryY)`, **不要添加第三个参数**
- 需求4: 展示商品的详情信息, 将复杂的数据整合到一个对象
  - 将网络请求下来的复杂的数据整合到一个对象, **整合一个类中传递对象, 从对象中取出需要的属性**
  - detail-base-info 封装, 将整合好的对象通过 pops 传递, 展示商品详情信息
- 需求5: 展示店铺详情信息, 将复杂的数据整合到一个对象
  - 将网络请求下来的复杂的数据整合到一个对象, **整合一个类中传递对象, 从对象中取出需要的属性**
  - detail-shop-info 封装, 将整合好的对象通过 pops 传递, 展示商品详情信息
- 需求6: 详情页加入滚动效果
  - 将底部导航覆盖, 相对定位和层级, 头部导航添加相对定位和层级和背景色
  - 引入 scroll 组件, 使用 scroll , 包裹需要 scroll 管理的区域
  - 注意: 需要给固定的高度, 这里使用 calc 来动态计算, 注意 100% 是相对于父元素的, 给父元素固定的个高 vh, 不要被撑开  
- 需求7: 商品详情图片列表展示和文字展示
  - 获取商品详情图片和文字数据, 创建 DetailGoodsInfo 组件, 通过 props 将 detailShopInfo 对象传递
  - 解决滚动问题: 原因网络请求下的图片, scroll 可以计算的高度不是正确的, 需要图片加载完毕时, refresh() 刷新 scroll 管理区域的高度
  - 在 DetailGoodsInfo 中添加 img 添加 load 事件, 在最后一张图片加载完毕时, 传递给 Detail 组件, 由Detail 组件, 通过 $ref 获取 scroll, 来刷新高度
- 需求8: 商品的尺寸和参数展示
  - 获取: 将网络请求下来的复杂的数据整合到一个对象, **整合一个类中传递对象, 从对象中取出需要的属性**, 获取商品的尺寸和参数需要用到的数据
  - 创建 DetailParamInfo 组件, 通过 props 将 paramInfo 对象传递



#### 1.详情页评论

- 需求1: 显示评论信息
  - 获取商品评论信息, 创建 DetaiCommentInfo 组件, 通过 props 将 commentInfo 对象传递
- 需求2: 将服务器返回的时间戳转换为 2020-07-30 格式的👇



#### 2.时间戳格式化

> 问题: 一般地服务器返回的时间都是时间戳, 如何将时间戳转成时间格式化字符串(**常用**)
> 时间戳: 1535694719(秒)
>
> 1. 将时间戳转成Date对象
>    - const date = new Date(1535694719*1000)
> 2. 将date进行格式化,转成时应的字符串
>    - date.getYear() + date.getMonth() + 1
>    - date-> FormatString(太常用)
>    - fmt.format(date, 'yyyy-MM-dd hh:mm:ss)
>    - y: year年
>    - M: Month月
>    - d: day 日
>    - hours 小时(h(12时)/H(24小时))
>    - m: minutes 分钟
>    - s: seconds秒钟

- 将时间戳过滤为正常的时间格式
  - 将时间戳转成Date对象
    - const date = new Date(1535694719*1000)
  - 引入工具函数添加 解析时间戳函数
    - formatDate(date, 'yyyy-MM-dd')



#### 3.详情页商品推荐

- 封装请求获取: 
  - 将商品推荐数据保存(新的接口封装), 复用之前的 GoodsList 组件, 将对象数组通过 props 传递
  - 因为传递数据普通是跟之前不一致的, 所以使用计算属性使用 逻辑或运算符 来兼容
- 需求1:  goodslistitem 发射的事件, 不能在Detail中使用 goodslistitem 组件, 在 Home 组件进行监听事件总线吧?
  - 方案1: 在goodslistitem发射事件前, 使用 route 判断 path, 根据 path 发射不同的事件
  - 方案2: 
    - 在 Home 组件离开的时候, 取消全局事件总线的监听, `$bus.$off('event', func)`
    - `func`: 要解绑的事件处理函数, 最好将事件处理函数保存到 data 中, 避免代码冗余
    - 在 Detail 组件中监听goodslistitem发射的事件, 然后再销毁的函数时, 解绑事件
- 需求2: HOME组件和Detail组件两个生命周期函数代码重复了, 使用 **<font color='red'>mixin 混入</font>**解决
  - 1.创建 mixins.js 文件, 写上重复的生命周期函数, 导出
  - 2.在Detail 和Home组件导入
  - 3.在options中: mixins: [itemImgMxins]



#### 4.标题和内容的联动效果

- 需求1: 点击标题,滚动到对应的主题

  - 在标题发生点击时, 发射事件传递 index 然后根据 index 跳转到对应的标题
    - 在data中保存Y坐标数组(themeTopY) 可以先随机给几个数 测试下
  - 获取真实的offsetTop: 参数和评论和推荐的Y坐标
    - 在 mounted 中, 获取 参数和推荐和评论的 offsetTop, 打印你会发现, 然后再 updated 中尝试你会发现
  - 在 created 中使用: `$nextTick( () => { xxx })` 
    - 在函数体中: 执行获取坐标, 该函数作用是: 是在下次DOM更新循环结束之后执行延迟回调
    - 在修改数据之后使用nextTick，则可以在回调中获取更新后的 DOM
  - 解决: 你返回点进另一个商品时, 点击参数或评论或推荐时, 跳转的Y坐标不对
    - 问题: 但是图片依然是没有加载完, (目前获取到offsetTop不包含其中的图片)
    - **解决方案**: 在图片加载完成后,获取的高度才是正确, 但是获取次数过于频繁, 使用防抖解决

- 需求2: 当内容滚动,标题对应高亮显示

  - 监听 Scroll 滚动事件, 传递 probeType 3 这时就可以获得坐标信息了

    - <details>
      <summary><b>判断滚动位置,设置index</b></summary>
      <pre>
          <img src="https://s1.ax1x.com/2020/07/28/aEUvnS.png" alt="aEUvnS.png" title="aEUvnS.png" />
      </pre>
      </details>

    - 问题1: 使用 for..in 中的 index 是 string 类型的, 需要类型转换 

    - 问题2: 当索引超出, 取到的是 undefined, 永远取不到第三个值

    - 解决方案: 👇

    - ```js
      if ((i < length - 1 && positionY > this.themeTopY[i] && positionY < this.themeTopY[i+1] ) || (i == length - 1 && positionY > this.themeTopY[i]))
      ```

  - 解决: 打印非常频繁的问题

    - ```js
      if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1]) || (i === length - 1 && positionY >= this.themeTopY[i]))
      this.currentIndex = i
      条件一: 防止赋值的过程过于频繁
      * 判断区间:在 0 和 某数字 之间(i=== length-1)
      判断大于等于: 1===length
      ```

- 需求3: 对复杂判断条件分析和优化

  - 在 themeTopY 数组中, 新添加一个临时用来比较的： 【较大的数值】

  - 在判断的时候注意：需要少循环一次，因为不需要遍历到临时添加的较大数值

  - ```js
    if (this.currentIndex !== i && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])
    ```



#### 5.底部工具栏

- DetailBottomBar

- 底部遮挡问题: 👇

  - <details>
    <summary><b>下拉查看</b></summary>
    <pre>
        <li><img src="https://s1.ax1x.com/2020/07/28/aVVGhd.png" alt="aVVGhd.png" title="aVVGhd.png" /></li>
    </pre>
    </details>



#### 6.回到顶部

- 复制过来的话, 太多了, 费劲, 抽到混入中
- 抽离: 
  - 导入
  - data 中 数据
  - compionents
  - 将是否显示抽离到methods中
- 将抽离好的混入, 应用到 Home 和 Detail 中

<details>
<summary><b>下拉查看</b></summary>
<pre>
    <li><img src="https://s1.ax1x.com/2020/07/28/aVuKoT.png" alt="aVuKoT.png" title="aVuKoT.png" /></li>
</pre>
</details>


#### 7.加入购物车🛒

- 需求1: 将点击事件传递给父组件
  - 加入购物车添加点击事件, 发射给父组件
  - 根据购物车界面需要: 设计数据结构: 图片,标题,描述,价格, iid (数据来 data 中)
  - 使用: Vuex
- 需求2: 将设计的数据添加到 Vuex
  - state中: 设计数据结构, 用于将来保存购物车页面的数据 (状态)
  - 点击购物车提交到 mutaion 中, 在 mutaion push进去 
    - 问题1: 你每次 push 进去, 应先先判断 数组 中是否已经存在这个对象了, **根据 iid 来判断**
    - 判断是否存在: 可以使用 for  for..of  find .... 
    - 如果存在: 则添加 count 属性 += 1
    - 如果不存在: 则添加 count 属性 = 1
- 需求3: Vuex中代码的重构
  - 因为: mutation中的每个方法尽量制作比较单一的操作, 所以将代码剪切到 action 中, 修改提交方式为 dispatch
  - 修改 action 中方法的参数: context, payload (也可以进行解构操作)
  - 将 action 中方法所有需要修改 state 进行 commit 到 mutation 中
  - 抽离出单独文件 和    抽离 mutation 方法为单独的常量



### 9.购物车

#### 1.购物车导航

- 需求1: 头部导航和购物车的数量

- 复用之前的 nav-bar 填充 center 插槽并调样式, 显示Vuex中保存的购物车的长度

  - 可以将购物车的长度封装到 computed 中
  - 也可以封装成 getter 在 computed 中使用, 你会发现比之前的代码更麻烦了
  - 解决方案: 使用 mapGetter 解决
    - 目的: <font color='red'>直接在组件中使用 getters </font>, `mapGetters `辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
    
    - <details>
      <summary><b>两种使用方法</b></summary>
      <img src="https://s1.ax1x.com/2020/07/29/ae76KI.png" alt="ae76KI.png" title="ae76KI.png" />
      </details>
    
    - 解决了: **不需要在 计算属性中 再次定义, 获取购物车长度, 直接使用 getter 中的方法** 
    
  - 并且将 state 保存的 cartList 作为 getter 返回, 以供商品的列列表页获取



#### 2.商品的列表

- 展示商品的列表
  - 在 组件中 通过 mapGetters 获取 cartList 数组数据, 并进行遍历检查
  - 使用 scroll 来代替原生滚动, 设置一个确定的 高度, 并给父元素一个确定的高度
  - 创建 cartListItem 组件并使用 cartList 数组数据遍历并传递给 cartListItem 
  - 由 cartListItem 来展示数据
- 展示商品的列表: 有时不可以滚动的问题, BScroll 不知道我们添加了新的数据
  - 解决方案: 有了新的数据, 对 BScroll 进行 refresh (可以在actiove中)
- 展示: 展示商品的列表
  - 拷贝模板和样式
- 制作选中按钮: content/CheckButton.vue
  - 通过 prop 来动态控制否是应用类样式
- 点击选中和取消选中
  - 大多项目中的选中和不选中: 都是在模型进行决定的, 模型就是你传递的对象数组, 在里面新添加属性来决定是否选中, **一定要让模型发生改变**
  - 在 mutation 中, 添加默认 false 不选中, 通过绑定属性动态控制传递的 props 为是否选中状态
  - 点击取消选中: 取出模型中控制是否选中的变量, 取反即可



#### 3.底部汇总

- CartBottomBar底部汇总的封装
  - 减少 BScroll 管理的区域, 从父元素中减去 40px 即可, 把 bottom 取消即可
  - 调整样式🐱‍🏍
- 全选按钮
  - 点击全选按钮: 遍历整个 carList 将所有的状态跟随全选状态
  - 然后动态绑定 class 应用类样式
- 购物车列表全选
  - 每点击一个按钮, 发射事件总线
  - 然后监听事件总线, 遍历 catList 使用some方法, 如果有一个为false直接结束循环



#### 4.Toast封装

- 需求: 点击购物车, 执行测试操作
  - 你不能直接在后面执行操作, 因为 despatch 操作是异步的, 你不确定执行成功没成功
  - 所以你需要: 将 action **包装成 promise 来确定**是否成功执行完毕
- mapActions的映射关系
  - 当我们想直接调用`this.addCart`时, 需要将mapActions的映射关系, 通过Vuex (也可以进行重命名)
  - 直接在: **methods**中进行使用, actions不需要再计算属性中使用

- Toast封装: 普通封装方式

  - props 传递 message 和 show , 调整样式固定为定位, 居中显示
  - 点击购物车, 后显示Toast, 并在1.5秒后取消显示 (定时器即可)
  - Toast封装封装完后想一想, 我们只是想要个消息弹窗, 这样在其他地方使用, 还得定义变量和传递porps, 变得更麻烦了, 我们想这么使用: `this.$toast.show(message, time)`

- Toast封装: 插件封装方式

  1. 在 Toast 文件加 新建 index.js , 作为插件准备

  2. 在 main.js 中安装 Toast 插件

  3. 将 Toast.vue 中的通过 porp 传递的删除, 直接定义在 data 中, 以供方法调用

  4. 在 index.js 中, 添加 install 方法参数1是Vue实例, 测试

  5. <details>
     <summary><b>index.js</b></summary>
     <img src="https://s1.ax1x.com/2020/07/30/aKPx29.png" alt="aKPx29.png" title="aKPx29.png" />
     </details>

  6. 给 message 和 delay 添加默认属性



### 10.other

#### 1.fastClick减少点击延迟

- 安装fastclick: npm i fastclick -S
- 导入:  import Fastclick from 'fastclick
- 调用attach函数:  Fastclick.attach(document.body)



#### 2.图片懒加载

- 安装vue-lazyload: npm i vue-lazyload -S
- 导入:  import VuelazyLoad from 'vue-lazyload
- 使用懒加载的插件: Vue. use(VueLazyLoad)
- :img="showImage" 替换 v-lazy="showImage"
- 占位图: options中 loading: require('url')



#### 3.px2vw-css单位转化插件

- 安装: npm i postcss-px-to-viewport -D
- postcss.config.js : 将配置拷贝

```js
module.exports = {
  plugins: {
    autoprefixer: {},
	  "postcss-px-to-viewport": {
		  viewportWidth: 375,  // 视窗的宽度，对应的是我们设计稿的宽度.
		  viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
		  unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
		  viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
		  selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类,后面再讲.
		  minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
		  mediaQuery: false // 允许在媒体查询中转换`px`
	  },
  }
}
```

- 如果你要排除**某些文件不做转换**: exclude: [/TabBar/]



#### 4.nginx部署

> 服务器问题:一台电脑(没有显示器,主机), 24小时开着,为用户提供服务.
> 公司有没有自己的服务主机?>租借阿里云(流媒体)/华为云腾讯云配置)
> 主机→操作系统> window.nety/Linux- tomcat/nginx(软件/反向代理)
> 第一:将自己的电脑作为服务器> windor-> nginx(服务器)
> 第二:远程部署

- 打包: npm run build
- [nginx](https://nginx.org)
- 其中包含很多的nginx版本,大致可以分成三类:
  - Mainline version : Mainline是Nginx目前主力在做的版本,可以说是开发版
  - Stable version :最新稳定版,生产环境上建议使用的版本
  - Legacy versions :遗留的老版本的稳定版
- Windows安装[nginx](https://nginx.org)
  - [windows下nginx启动一闪而过(原因以及查看和解决的办法)](https://blog.csdn.net/qq_37457202/article/details/82016374)
- URL: http://localhost:8888/      Welcome to nginx!
- 将 dist 文件放到nginx目录下的 html 里



##### Centos上安装nginx

- 通过终端远程登录自己的服务器
- 安装并启动Nginx
  - yum install nginx
  - systemctl start nginx.service #开启nginx服务
  - systemctl enable nginx.service #跟随系统启动





### 11.商品分类

#### 1.nav-bar头部

- 复用 nav-bar , 填充插槽



#### 2.category-content 主体内容

<details>
<summary><b>搭建思路</b></summary>
<img src="https://s1.ax1x.com/2020/07/31/a1AgeJ.png" alt="a1AgeJ.png" title="a1AgeJ.png" />
</details>


#### 3.category-left商品分类(左)

- category数据的请求封装
  - url: 'category'
- 点击高亮显示
- 返回的数据: maitKey : category-right商品分类的显示



#### 3.category-right商品分类(右)

- 商品图标的分类接口: http://152.136.185.210:8000/api/z8/subcategory?maitKey=582
- 数据的请求封装
- 当最后一张图片加载完毕: 发射事件, 刷新scroll管理区域


