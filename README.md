# Learn Vue.js

## 认识Vue.js

### Vue初体验

``` html
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

### Vue中的MVVM

- View层
  - 视图层

- Model层
  -  数据层

- VueModel
  - 视图模型层

### Vue实例传入的 options

`el`: 决定Vue实例会管理哪一个DOM
`data`: Vue实例对应的数据对象
`methods`: 定义属于Vue的一些方法, 可以在种子零或其他地方调用

### Vue生命周期
![](https://gitee.com/xmkm/cloudPic/raw/master/img/lifecycle.png)



## 插值指令

### Mustache
- 插值表达式 {{}}
> 数据绑最常见的形式就是用"Mustache"语法 (双大括号语法)
``` html
<span>Message: {{ msg }}</span>
```
Mustache 标签将会被替代为对应数据对象上 msg 属性（msg定义在data对象中）的值。

无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会自动更新。

### v-once
> 该指令后面不需要跟任何表达
该指令表示元素只<font color='red'>渲染一次</font>，不会随着数据的改变而改变。

``` js
<h2 v-once>{{message}}</h2>
```

### v-html
> 解析<font color='red'>数据中的html</font>代码，渲染到页面中

``` html
<h2 v-html="url"></h2>
```

### v-text
> v-text作用和Mustache比较相似：都是用于将<font color='red'>数据显示在界面</font>中, 不同的是 v-text是写在属性中
v-text通常情况下，接收一个string类型

``` html
<h2 v-text="text"></h2>
```

### v-pre
> v-pre用于跳过这个元素和它子元素的编译过程，用于<font color='red'>显示原本的Mustache</font>语法。

``` html
<h2 v-pre>{{message}}</h2>
```

### v-cloak
> 在某些情况下，我们浏览器可能会直接显然出未编译的Mustache标签。
v-cloak指令和CSS 规则一起用的时候，能够解决插值表达式闪烁的问题（即：可以隐藏未编译的标签直到实例准备完毕）

``` html
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
### v-bind介绍
- 前面我们学习的指令主要作用是将值插入到我们<font color='red'>模板的内容</font>当中。
- 但是，除了内容需要动态来决定外，某些<font color='red'>属性</font>们也希望动态来绑定。
- 作用: 给html元素或组件动态绑定一个或多个特性, 例如动态绑定`class`和`style`
  - 比如动态绑定a元素的href属性
  - 比如动态绑定img元素的src属性
这个时候，我们可以使用v-bind指令：

- **作用**：动态绑定属性
- **缩写**： `:`
- **预期**：any (with argument) | Object (without argument)
- **参数**：attrOrProp (optional)

### v-bind绑定class
绑定class两种方式
  - 对象语法
  ``` html
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
  ``` html
	<!-- 1. ['active','news'] 当字符串使用 -->
<h2 class="title" :class="['active','news']">{{message}}</h2>
	<!-- [active, new] 当变量使用 -->
<h2 class="title" :class="[active,news]">{{message}}</h2>
	<!-- 3. 函数返回值使用 -->
<h2 class="title" :class="getClasses()">{{message}}</h2>
  ```

### v-bind绑定style
- 我们可以利用v-bind:style来绑定一些CSS内联样式
- 绑定class有两种方式
- **对象语法**
  - `style`后面跟的是一个对象类型
  - 对象的`key`是css属性名
  - 对象的`value`是具体赋的值, 可以来自`data`中的属性
``` html
:style="{color: currentColor, fontSize: fontSize + 'px'}" 
```
- 数组语法
  - `style`后面跟的是一个数组类型, 多个值以 , 分隔
``` html
<div v-bind:style="[baseStyles, fontColor]"></div>
/* js */
baseStyle: {background: 'lime'},
fontSize: {fontSize: '80px'}
```

## computed计算属性
### 基本概念
- 计算属性出现的目的是<font color='red'>解决模板中放入过多的逻辑</font>会让模板国中难以维护的问题
- 计算属性是基于他们的响应式<font color='red'>依赖进行缓存的</font>
- 在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示

  - 比如我们有`firstName`和`lastName`两个变量，我们需要显示完整的名称。
  - 但是如果多个地方都需要显示完整的名称，我们就需要写多个`{{firstName}} {{lastName}}`

- 将上面代码转换成计算属性       
``` html
/* html */ 
<h2>{{fullNmae}}</h2>

/* js */
computed: {
    fullNmae: function () {
      return this.firstNmae + ' ' + this.lastNmae;
    }
  }
```

### 计算属性的缓存
- methods和computed区别
  - `methods`里面的数据不管发没发生变化, 只要调用了都会执行函数(有的时候数据没发生变化我们不希望调用函数)
  - `computed`计算属性会进行缓存, 如果数据没发生变化,函数只会被调用一次(数据发生变化才会调用函数)
- 总结:
  - `methods`不管数据发没发生变化都会调用函数
  - `computed`只有在依赖数据发生变化时才回调函数


## 事件监听指令
- 用于监听用户交互的各种事件
- v-on 介绍
  - 作用: 绑定事件监听器
  - 缩写:  `@`
- 情况一: 如果该方法不需要额外参数, 方法后`()`可以省略
  - 没有传入参数, 接收形参时默认会将原生事件`event`参数传递进去
- 情况二: 如果需要同时传入某个参数, 同时需要`event`时, 可以通过`$event`传入事件

### v-on修饰符
`.stop`: 🚫阻止事件冒泡
`.prevent`: 阻止默认事件行为
`.{keyCode \| keyAlias }`: 当事件是从特定键触发时才触发回调
`.once`: 事件只触发一次

## 条件渲染指令
### v-if和v-else-if与v-else
- Vue的条件指令可以根据表达式的值在DOM中渲染或销毁元素或组件
``` html
<h2 v-if="score>=90">优秀</h2>
    <h2 v-else-if="score>=80">良好</h2>
    <h2 v-else-if="score>=60">及格</h2>
    <h2 v-else>不及格</h2>
```
### v-show
> v-show的用法和v-if非常相似,也用于决定一个元素是否渲染
- v-if 和 v-show对比
  - v-if 当条件为false时,压根不会有对应的元素在DOM中
  - v-show 当条件为false时, 仅仅是将元素的 display 属性设置 none 而已
- 开发中如何选择呢?
  - 当需要在显示与隐藏之间切换很频繁时,使用v-show
  - 当只有一次切换时,通过使用v-if
``` html
<h2 v-show="isShow">{{message}}</h2>
```

