# Vue基础

[toc]

## 邂逅Vuejs

### 1.认识Vuejs

- Vue是一个<font color='red'>渐进式框架</font>, 什么是渐进式的呢?
  - 声明式渲染→组件系统→客户端路由→集中式状态管理→项目构建
  - 渐进式意味着你可以将Vue作为你<font color='red'>应用的一部分</font>嵌入其中，带来更丰富的交互体验。
- Vue有很多特点和Web开发中常见的高级功能
  - 解耦视图和数据
  - 可复用的组件
  - 前端路由技术
  - 状态管理
  - 虚拟DOM



### 2.Vue初体验

![image-20200510173726520](https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200510173726520.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--1、导入Vue的包-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
</head>
<body>
    <!--这个div区域就是MVVM中的 View-->
    <div id="app">
        {{message}}
    </div>
</body>
<script>
    // 2、创建一个Vue的实例
    var app = new Vue({
        el: '#app', //用于挂载要管理的元素
        data: {// 定义数据
            message: '学习Vue.js'
        }
    });
</script>
</html>
```



### 3.Vue中的MVVM

![](https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200421173111547.png)

- View层
  - <font color='red'>视图层</font>
  - 前端开发中, 通常就是DOM层
  - 主要的作用是给用户展示各种信息
- Model层
  - <font color='red'>数据层</font>
  - 数据可能是我们固定的死数据, 更多的是来自我们的服务器, 从网络上请求下来的数据
- VueModel层
  - <font color='red'>视图模型层</font>
  - 视图模型层是View和Model沟通的桥梁
  - 一方面它实现了 Data binding, 也就是数据绑定, 将Model的改变实时的反应到了View中
  - 另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件(点击、滚动、touch等)时，可以监听到，并在需要的情况下改变对应的Data。



### 4.Vue实例传入的options

- 目前掌握


| 属性名    | 类型                                                         | 作用                                                         |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `el`      | <font color='blue'>类型: string \| HTMLElement</font>        | 决定Vue实例会管理哪一个DOM                                   |
| `data`    | <font color='blue'>类型: Object \| Function (组件当中data必须是一个函数)</font> | Vue实例对应的数据对象                                        |
| `methods` | <font color='blue'>类型: { [key: string]: Function  }</font> | 定义属于Vue的一些方法, 可以再其他地方调用, 也可以在指令中使用 |



### 5.Vue生命周期

<details>
    <summary><b>官方图</b></summary>
<pre>
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200422173553857.png">
</pre>
</details>








## 插值指令

### 1.Mustache

- 插值表达式 {{}}

> 数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值。例如：
>
> ```js
> <span>Message: {{ msg }}</span>
> ```
>
> Mustache 标签将会被替代为对应数据对象上 msg 属性（msg定义在data对象中）的值。 
>
> 无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会自动更新。

| 语法       | `{{}}`JavaScript 表达式支持                |
| ---------- | ------------------------------------------ |
| 普通表达式 | {{ number + 1 }}                           |
| 三元表达式 | {{ ok ? 'YES' : 'NO' }}                    |
| 三元表达式 | {{ name == 'smyhvae' ? 'true' : 'false' }} |
| 调用方法   | {{ message.split('').reverse().join('') }} |



### 2.v-once

> 该指令后面不需要跟任何表达
> 该指令表示元素<font color='red'>只渲染一次</font>，不会随着数据的改变而改变。

```html
<h2 v-once>{{message}}</h2>
```



### 3.v-html

> 解析<font color='red'>数据中的html</font>代码，渲染到页面中

```html
<h2 v-html="url"></h2>
```



### 4.v-text

> v-text作用和Mustache比较相似：都是用于将<font color='red'>数据显示在界面</font>中, 不同的是 v-text 是写在属性中
> v-text通常情况下，接收一个string类型

```html
<h2 v-text="text"></h2>
```



### 5.v-pre

> v-pre用于跳过这个元素和它子元素的编译过程，用于<font color='red'>显示原本的Mustache</font>语法。

```html
<h2 v-pre>{{message}}</h2>
```



### 6.v-cloak

> 在某些情况下，我们浏览器可能会直接显然出未编译的Mustache标签。
> v-cloak指令和CSS 规则一起用的时候，能够解决插值表达式闪烁的问题（即：可以隐藏未编译的标签直到实例准备完毕）

```html
<!-- 在vue解析之前, div中有一个属性v-cloak
在vue解析之后, div中没有一个属性v-cloak -->
<div id="app" v-cloak>
  <h2>{{message}}</h2>
</div>
```



### 总结

- Mustache:  {{}}语法, 可以写变量/逻辑表达式/计算值...
- v-once : 元素只渲染一次，不会随着数据的改变而改变。
- v-html="" : 解析数据中的html代码，渲染到页面中
- v-text="msg":  写在属性当中, 将数据显示在界面中
- v-pre: 原文输出, 显示原本的Mustache语法
- v-cloak : 一般配合CSS规则一起使用, 够解决插值表达式闪烁的问题







## v-bind绑定属性

### 1.v-bind介绍

- 前面我们学习的指令主要作用是将值插入到我们<font color='red'>模板的内容</font>当中。
- 但是，除了内容需要动态来决定外，某些<font color='red'>属性</font>们也希望动态来绑定。
- 作用：可以给html元素或者组件动态地绑定一个或多个特性，例如动态绑定`style`和`class`
  - 比如动态绑定a元素的href属性
  - 比如动态绑定img元素的src属性
- 这个时候，我们可以使用v-bind指令：
  - **作用**：动态绑定属性
  - **缩写**： ` :`
  - **预期**：any (with argument) | Object (without argument)
  - **参数**：attrOrProp (optional)



### 2.v-bind绑定class

> 绑定class有两种方式
>
> - 对象语法
> - 数组语法

- 对象语法
  - 对象语法的含义是`:class`后面跟的是一个<font color='red'>对象</font>。

```html
	<!-- 用法一：直接通过{}绑定一个类 -->
<h2 :class="{'active': isActive}">Hello World</h2>

	<!-- 用法二：也可以通过判断，传入多个值 -->
<h2 :class="{'active': isActive, 'line': isLine}">Hello World</h2>

	<!-- 用法三：和普通的类同时存在，并不冲突 -->
<!--注：如果isActive和isLine都为true，那么会有title/active/line三个类-->
<h2 class="title" :class="{'active': isActive, 'line': isLine}">Hello World</h2>

	<!-- 用法四：如果过于复杂，可以放在一个methods或者computed中 -->
	<!--注：classes是一个计算属性 -->
<h2 class="title" :class="classes">Hello World</h2>
```

- 数组语法
  - 数组语法的含义是`:class`后面跟的是一个<font color='red'>数组</font>。

```html
	<!-- 1. ['active','news'] 当字符串使用 -->
<h2 class="title" :class="['active','news']">{{message}}</h2>
	<!-- [active, new] 当变量使用 -->
<h2 class="title" :class="[active,news]">{{message}}</h2>
	<!-- 3. 函数返回值使用 -->
<h2 class="title" :class="getClasses()">{{message}}</h2>
```



### 3.v-bind绑定style

- 我们可以利用v-bind:style来绑定一些CSS内联样式
- 绑定class有两种方式
  - 对象语法
  - 数组语法

- **对象语法**
  - `style`后面跟的是一个对象类型
  - 对象的`key`是css属性名
  - 对象的`value`是具体赋的值, 可以来自`data`中的属性

```css
:style="{color: currentColor, fontSize: fontSize + 'px'}" 
```

- 数组语法
  - `style`后面跟的是一个数组类型, 多个值以 , 分隔

```js
<div v-bind:style="[baseStyles, fontColor]"></div>
/* js */
baseStyle: {background: 'lime'},
fontSize: {fontSize: '80px'}
```







## computed计算属性

### 1.基本概念

- 计算属性出现的目的是<font color='red'>解决模板中放入过多的逻辑</font>会让模板过重且难以维护的问题

- 计算属性是基于它们的响应式<font color='red'>依赖进行缓存</font>的

- 在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示

  - 比如我们有`firstName`和`lastName`两个变量，我们需要显示完整的名称。
  - 但是如果多个地方都需要显示完整的名称，我们就需要写多个`{{firstName}} {{lastName}}`

- 将上面代码转换成计算属性       

  ```js
  /* html */ 
  <h2>{{fullNmae}}</h2>
  
  /* js */
  computed: {
      fullNmae: function () {
        return this.firstNmae + ' ' + this.lastNmae;
      }
    }
  ```




### 2.计算属性的setter和getter

- 每个计算属性都包含一个`getter`和一个`setter`
  - 在上面的例子中，我们只是使用`getter`来读取。
  - 在某些情况下，你也可以提供一个setter方法（不常用）。
  - 在需要写setter的时候，代码如下：

<details>
<summary><b>展开查看</b></summary>
<pre><img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200427212309426.png"/></pre>
</details>




### 3.计算属性的缓存

- methods和computed区别
  - `methods`里面的数据不管发没发生变化, 只要调用了都会执行函数(有的时候数据没发生变化我们不希望调用函数)
  - `computed`计算属性会进行缓存, 如果数据没发生变化,函数只会被调用一次(数据发生变化才会调用函数)
- 总结:
  - `methods`不管数据发没发生变化都会调用函数
  - `computed`只有在依赖数据发生变化时才回调函数





## 事件监听指令

- 在前端开发中，我们需要经常和用户交互
  - 这个时候我们就必须监听用户的发生时间，比如点击, 拖拽事件等等
- v-on 介绍
  - 作用: 绑定事件监听器
  - 缩写:  `@`

### 1.v-on参数

- 当`methods`中定义方法, 以供`@click`调用时, 需要注意参数问题
- 情况一: 如果该方法不需要额外参数, 方法后`()`可以省略
  - 没有传入参数, 接收形参时默认会将原生事件`event`参数传递进去
- 情况二: 如果需要同时传入某个参数, 同时需要`event`时, 可以通过`$event`传入事件



### 2.v-on修饰符

- `v-on` 提供了很多事件修饰符来辅助实现一些功能。事件修饰符有如下

| 修饰符                  | 作用                                               |
| ----------------------- | -------------------------------------------------- |
| .stop                   | 阻止冒泡。本质是调用 event.stopPropagation()       |
| .prevent                | 阻止默认事件行为 本质是调用 event.preventDefault() |
| .{keyCode \| keyAlias } | 当事件是从特定键触发时才触发回调                   |
| .once                   | 事件只触发一次                                     |





## 条件渲染指令

### 1.vi-f与v-else-if与v-else

- Vue的条件指令可以根据表达式的值在DOM中渲染或销毁元素或组件

```html
<h2 v-if="score>=90">优秀</h2>
    <h2 v-else-if="score>=80">良好</h2>
    <h2 v-else-if="score>=60">及格</h2>
    <h2 v-else>不及格</h2>
```

- 逻辑较多不建议在模板中使用`v-if-else-if`



### 2.复用元素渲染问题

> 一个问题: 涉及到了Vue底层, 虚拟DOM virtual DOM
> 点击切换表单后,input的value值并没有被清空,为什么?

- 引出： 当实现点击按钮切换`input`表单时, 我们输入上的`value`, 点击按钮切换表单时会发现`value`值还存在, 但是`input`元素确实切换了, 这是因为什么呢?

```html
<span v-if="isUser">
      <label for="user">用户名</label>
      <input type="text" placeholder="用户名" id="user" key="user">
</span>
<span v-else>
      <label for="email">邮箱</label>
      <input type="text" placeholder="邮箱" id="email" key="email">
</span>
<button @click="isUser=!isUser">切换类型</button>
<script> 
const app = new Vue({
  el: '#app',
  data: {
     isUser: true
  }
})
</script>
```

- 原因:
  -  1.这是因为Vue在进行DOM渲染时, 出于性能考虑, 会尽可能服复用已经存在的元素, 而不是创建新的元素
  -  2.上面的案例中, Vue内部会进行对比发现两部分都相似只会替换属性, 不会给你创建全新的元素
  -  3.上面 if 的 input不再使用, 直接作为 else 的 input来使用
- 解决方案
  - 1.如果我们不希望 `Vue`出现类似重复利用的问题, 可以给对应的` input `添加 `key`
  - 2.并且保证要们需要的`key`不同, 这样 `vue`就会创建一个全新 `input`元素



### 3.v-show

> v-show的用法和v-if非常相似,也用于决定一个元素是否渲染

- v-if 和 v-show对比
  - v-if 当条件为false时,压根不会有对应的元素在DOM中
  - v-show 当条件为false时, 仅仅是将元素的 display 属性设置 none 而已
- 开发中如何选择呢?
  - 当需要在显示与隐藏之间切换很频繁时,使用v-show
  - 当只有一次切换时,通过使用v-if

```html
<h2 v-show="isShow">{{message}}</h2>
```





## 循环遍历指令

### 1.v-for遍历数组

- 作用：根据数组中的元素遍历指定模板内容生成内容。
- 语法: ` v-for="(item, index) in items" `

```html
<ul>
    <!-- item: 是每一项元素	index: 下标/索引 -->
    <li v-for="(item, index) in name">
      {{index+1}}.{{item}}
    </li>
 </ul>
```



### 2.v-for遍历对象

- 作用: 遍历对象
- 语法: `v-for="(value, key, index) in items"`

```html
<ul>
    <!-- value:属性值  key:属性名  index:下标/索引 -->
    <li v-for="(value, key, index) in info">
      {{index+1}}.{{value}}
    </li>
 </ul>
```



### 3.Vue中Key属性

- 官方推荐我们在使用`v-for`时,给对应的元素或组件添加上一个`:key`属性。
- 为什么需要这个key属性呢(了解) ?
  - 这个其实和Vue的虚拟DOM的`Diff`算法有关系。
- 当某一层有很多相同的节点时，也就是列表节点时，我们希望插入一个新的节点
  - 我们希望可以在B和C之间加一个F，Diff算法默认执行起来是这样的。
  - 即把C更新成F，D更新成C，E更新成D，最后再插入E，是不是很没有效率？
- 所以我们需要使用key来给每个节点做一个唯一标识
  - Diff算法就可以正确的识别此节点
  - 找到正确的位置区插入新的节点
- <font color='red'>key的作用主要是为了高效的更新虚拟DOM</font> 

![image-20200505214434701](https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200505214434701.png)

> 使用`v-for`更新已渲染的元素列表时,默认用<font color='red'>就地复用</font>策略; 如果列表数据修改的时候, 它会根据key值去判断某个值是否修改, 如果修改, 则重新渲染这一项, 否则复用之前的元素; 我们在使用的使用经常会使用`index`(即数组的下标)来作为`key`,但其实这是不推荐的一种使用方法; 



### 4.数组响应式方法

- 因为Vue是响应式的, 所以当数据发生变化时, Vue会自动检测数据变化, 视图会对应的更新
- Vue中包含了一组观察数组编译的方法, 使它们改变数组也会触发更新视图
  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()



### 5.Vue.set修改响应式数据

- `Vue.set(vm.items, indexOftem, newValue)`
- `vm.$set(vm.items ,indexOften,newValue)`
  - 参数1: 要修改的数组/对象
  - 参数2: 要设置的索引/添加的属性名
  - 参数3: 设置的值



### 6.v-if 和 v-for

> 当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，这意味着
>
> `v-if` 将分别重复运行于每个`v-for`循环中。
>
> 避免 `v-if` 和 `v-for`用在一起

- 原因
  - 如果使用了 if 判断, 每次渲染在Vue内部都会遍历整个列表, 不论判断条件是否发生了变化
- 使用计算属性的好处
  - 1.过滤后的列表只会在users数组发生相关变化时才被重新运算,过滤更高效。
  - 2.使用v-for="user in activeusers"之后,我们在渲染
  - 3.的时候只遍历活跃用户,渲染更高效。
  - 4.解耦渲染层的逻辑,可维护性(对逻辑的更改和扩展)更强。
  - [详细讲解](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)





## 表单绑定v-model

### 1.基本概念

- Vue中使用`v-model指令`来实现表单元素和<font color='red'>数据的双向绑定</font>
  - 数据与模板是相互影响的, 一方发生变化, 另一方立即做出更新
- 引出: 
  - 在之前的案例, 我们通过v-bind,给\<input>标签绑定了data对象里的name属性。data中的name的值发生改变时, \<input>标签里的内容会自动更新。
  - 可现在要做的是: 在\<input>标签里修改内容, 要求data中的name的属性值自动更新。从而实现<font color='red'>双向数据绑定</font>。该怎么做呢? 这就可以利用`v-model`这个属性。


![image-20200510174213506](https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200510174213506.png)

- 区别: 
  - `v-bind`: 只能实现数据的单向绑定, 从M自动绑定到v。
  - `v-model`: 只有`v-model`才能实现双向数据绑定。注意, `v-model后`面不需要跟冒号
- 注意
  - `v-model`只能运用在表单元素中, 或者用于自定义组件。常见的表单元素包括: `input(radio,text,address,email...) ,select, checkbox, textarea.`

### 2.v-model原理

- v-model其实是一个语法糖, 他背后本质是包含两个操作
  - v-bind绑定一个value属性
  - v-on指令绑定当前元素的input事件
- 也就是说下面的代码：等同于下面的代码：

```html
<input type="text" v-model="message">
<!-- 等同于下面的代码 -->
<input type="text" :value="message" @input="message = $event.target.value">
```



### 3.表单绑定v-model

- Vue中使用`v-model`指令来实现表单元素和数据的双向绑定
- 案例解析:
  - 当我们在数据框输入内容时
  - 因为input中v-model绑定了message, 所以会实时将输入的内容传递给message, message发生变化
  - 当message发生变化时, 因为上面我们使用Mustanche语法, 将message的值插入到DOM中, 所以DOM会发生响应式的改变
  - 所以, 通过v-model实现了双向的绑定
- 当然, 我们可以将v-model用于textarea元素

<details>
<summary>1.表单绑定v-model</summary>
<pre>
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200509220106111.png" alt="image-20200509220106111" style="zoom:98%;" />
</pre>
</details>

<details>
<summary>2.textarea绑定v-model</summary>
<pre>
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200509220554443.png" alt="image-20200509220554443"  />
</pre>
</details>

​	

### 4.表单中其它类型绑定v-model

- 表单中其它类型, 绑定`v-model` 

| 表单类型            | 单选/多选情况 | 绑定的值                               |
| ------------------- | ------------- | -------------------------------------- |
| `v-model: radio`    | 多个单选框时  | 绑定的`值是value`                      |
| `v-model: checkbox` | 单个勾选框    | v-model即为`布尔值`                    |
|                     | 多个复选框    | 选中多个, 对应的`data`属性是一个`数组` |
| `v-model: select`   | 单选          | `v-model`绑定的是一个`值`              |
|                     | 多选          | `v-model`绑定的是一个`数组`            |

<details>
<summary>v-model: radio</summary>
<pre>
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200509221331165.png" alt="image-20200509221331165"  />
</pre>
</details>
<details>
<summary>v-model: checkbox</summary>
<pre>
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200509221950561.png" alt="image-20200509221950561"  />
<img src="https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/image-20200509222558433.png" alt="image-20200509222558433" align="left" />
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/20200509223019.gif" align="right" />
</pre>
</details>
<details>
<summary>v-model: select</summary>
<pre>
<img src="https://cdn.jsdelivr.net/gh/wanguano/cloudPic/img/image-20200509223536140.png" />
</pre>
</details>










### 5.值绑定

- 动态的给`value`赋值而已
  - 我们前面之前写的`value`中的值, 都是在定义input中直接给定的
  - 但是真是开发中, 这些input中的value值可能是从服务器中获取, 然后定义的
  - 所以我们可以通过`v-bind:value`动态的给value绑定值

 <details>
<summary>值绑定</summary>
<pre>
<img src="https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200510163644495.png" alt="image-20200510163644495" style="zoom:200%;" />
</pre>
</details>





### 5.v-model的修饰符

| 修饰符    | 作用                                                  |
| --------- | ----------------------------------------------------- |
| `.lazy`   | 当表单`失去焦点`或按下`回车`时,`data`中的数据才会更新 |
| `.number` | 输入的内容转换为`number`数据类型                      |
| `.trim`   | 过滤内容的两侧`空格`                                  |





## Vue常用特性

### 1.自定义指令

> - 为何需要自定义指令
>   - 内置指令不满足需求

#### Vue.directive  注册全局指令

- 自定义指令语法(获取焦点)

```js
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()// 获取元素的焦点
  }
})
// 使用自定义指令
<input type="text" v-focus>
```

- **带参数的自定义指令**

```js
Vue.directive('color', {
      // bind声明周期, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      // el 为当前自定义指令的DOM元素  
      // binding 为自定义的函数形参   通过自定义属性传递过来的值 存在 binding.value 里面
      bind: function(el, binding){
        // 根据指令的参数设置背景色
        // console.log(binding.value.color)
        el.style.backgroundColor = binding.value.color;
      }
    });
// 使用带参数自定义指令
<input type="text" v-color='msg'>
```



#### 自定义局部指令

- 局部指令，需要定义在  `directives` 的选项   用法和全局用法一样 
- 局部指令只能在当前组件里面使用
- 当全局指令和局部指令同名时以局部指令为准

```js
directives: {
    focus: {
        inserted: function(el) {
            el.focus();
        }
    }
}
```



### 2.侦听器 watch

> - 侦听器的应用场景
>   - 数据变化时执行`异步`或`开销较大的操作`
>
> ![image-20200511180435528](https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200511180435528.png)
>
> - 注意: watch 中的属性 一定是data 中 已经存在的数据 

```js
// 当data中的: firstName属性或lastNames属性改变时, 会自动触发对应的watch
watch: {
     firstName(val) { // val: 表示变化后的值
       this.fullName = val + ' ' + this.lastName;
     },
     lastName(val) {
       this.fullName = this.firstName + ' ' + val;
     }
  }
```



### 3.过滤器

> - 概念: Vue.js允许我们自定义过滤器,可被用作一些常见的`文本格式化/处理`。
> - 过滤器可以用在两个地方: mustache插值表达式、v-bind表达式。
> - 过滤器应该被添加在JavaScript表达式的尾部,由“管道”符指示。
>
> - 过滤器不改变真正的`data`，而只是改变渲染的结果，并返回过滤后的版本
>
> ![image-20200511204822969](https://gitee.com/xmkm/cloudPic/raw/master/img/image-20200511204822969.png)
>
> - 全局注册时是filter，没有s的。而局部过滤器是filters，是有s的
> - 支持级联操作(对前一个过滤的数据再次进行过滤处理)

#### 自定义全局过滤器

- 我们可以用全局方法`Vue.filter()`自定义一个全局过滤器。这样的话,每一个Vue的对象实例(`每一个VM实例`)都可以拿到这个过滤器。它接收`两个参数`: `过滤器的名称`、`过滤器函数`。

```html
<div>{{msg | upper}}</div>
<div>{{msg | upper | lower}}</div>
<div :class="msg | upper"></div>
<!-- 带参数过滤 -->
<div>{{date | format('yyyy-MM-dd')}}</div>
<script>
	 // 1.全局过滤器
    Vue.filter('upper', (val) => {
        // val就是要处理的数据
      return val.charAt(0).toUpperCase() + val.slice(1);
    })
    // 2.处理带参数过滤器
    Vue.filter('format', (date, arg) => {
      // arg: 传递的参数
      if (arg === 'yyyy-MM-dd') {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      }
    })
</script>
```





#### 自定义私有过滤器

- 私有过滤器: 在某一个vue对象内部定义的过滤器称之为私有过滤器
- 这种过滤器只有在`当前vue对象`的`el指定的监管区域`有用。

```html
<!-- 管道符前面的price: 要把price这段文本进行过滤 -->
<!-- 管道符后面的showPrice: 是通过showPrice这个过滤器来进行操作 -->
<td>{{price | showPrice}}</td>
<script>
const app = new Vue({
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})
</script>
```



### 4.生命周期

- 事物从出生到死亡的过程
- Vue实例从创建到销毁的过程,这些过程中会伴随着一些函数的自调用。我们称这些函数为钩子函数

- **主要阶段**
- 挂载(初始化相关属性)
  - beforeCreate
  - created
  - beforeMount
  - mounted
- 更新(元素或组建的变更操作)
  - beforeUpdate
  - updated
- 销毁(销毁相关属性)
  - beforeDestroy
  - destroyed

| 钩子函数      | 过程                                                         |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 在实例初始化之后, 数据观测和事件配置之前被调用此时data和methods以及页面的DOM结构都没有初始化什么都做不了 |
| created       | 在实例创建完成后被立即调用此时data 和 methods已经可以使用但是页面还没有渲染出来 |
| beforeMount   | 在挂载开始之前被调用此时页面上还看不到真实数据只是一个模板页面而已 |
| mouted        | el被新创建的vm.$el替换, 并挂载到实例上去之后调用该钩子。数据已经真实渲染到页面上在这个钩子函数里面我们可以使用一些第三方的插件 |
| beforeUpdate  | 数据更新时调用，发生在虚拟DOM打补丁之前。   页面上数据还是旧的 |
| update        | 由于数据更改导致的虚拟DOM重新渲染和打补丁, 在这之后会调用该钩子。页面上数据已经替换成最新的 |
| beforeDestroy | 实例销毁之前调用                                             |
| destroyed     | 实例销毁后调用                                               |



