# wayswipe

[![](https://img.shields.io/npm/v/wayswipe.svg)](https://www.npmjs.com/package/wayswipe) 
![](https://img.shields.io/github/languages/top/way-jm/wayswipe.svg)
 ![GitHub language count](https://img.shields.io/github/languages/count/way-jm/wayswipe.svg)
 ![GitHub package.json dynamic](https://img.shields.io/github/package-json/swipe/way-jm/wayswipe.svg)
## 序言

- 直接开搞：就是要实现类似手机QQ左滑显示更多选项的需求，
 搜寻了一波方案上，发现滴滴的cube-ui中swipe实现了一样的功能。
 cube-ui功能和强大，有需要的小伙伴可以移步这里：[cube-ui](https://didi.github.io/cube-ui/#/zh-CN)。
 这里也是借鉴(程序员的事怎么能说抄呢)了cube-ui相关源码，
- 但是很多人还是喜欢"开箱即用",使用一个组件，比运用一个框架简单，哪怕这个框架可以按需引用。
  所以抽出了其中的核心代码，删繁就简，加以润色，方便单独使用。


## 演示

#### Talk is cheap,show you demo

- [https://way-jm.github.io/wayswipe/](https://way-jm.github.io/wayswipe/)

###### 代码在example中

## 用法

  - 安装
  `
  npm install wayswipe --save
  `  
  
  - 使用
  `
   import {vswipe, vswipeItem} from 'wayswipe' 
  ` 
  - 来一个插槽slot
  
  `template`
  
   ```
<vswipe>
  <transition-group name="swipe" tag="ul">
      <li v-for="(item,index) in testArr" :key="item.name" class="swipe-item-wrapper">
        <vswipeItem
          ref="swipeItem"
           :index="index"
        >
        <div class="content" :class="item.cl">
          <div class="stock">
            <h1 class="mbc1">{{item.name}}</h1>
            <h2 class="gf">{{item.age}}</h2>
          </div>
         <div class="bf price">{{item.hometown}}</div>
           <div class="gap">
            <span>{{item.tv}}</span>
           </div>
         /div>
       </vswipeItem>
       <div class="line"></div>
      </li>
 </transition-group>
</vswipe>
          
```
`data`
```
export default {
   name: 'App',
   components: { vswipe, vswipeItem},
   data() {
    return {
     testArr: [
       {name: '佐佐木希',hometown:'秋田县', age: '1988年2月8日',cl:'plus',tv:'天使之恋'},
       {name: '新垣结衣',hometown:'冲绳', age: '1988年6月11',cl:'minus',tv:'花水木'},
       {name: '上野树里',hometown:'兵库县', age: '1986年5月25',cl:'plus',tv:'摇摆少女'},
      ]
   }
 },
}
```

## 最终效果

![图片](https://way-jm.github.io/wayswipe/static/picture/demo1.png)







