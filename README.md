#序言
-首先要说的是我不太会写文档;
-之前遇到一个需求，就是要实现类似手机QQ左滑显示更多选项的需求，
 搜寻了一波方案上，发现滴滴前端团队的cube-ui中swipe实现了一样的功能。
 cube-ui功能和强大:[传送门](https://didi.github.io/cube-ui/#/zh-CN),推荐一波，实名感谢。
 本组件也是借鉴(程序员的事怎么能说抄呢)了cube-ui相关源码，
-但是很多人还是喜欢"开箱即用",使用一个组件，比运用一个框架简单，哪怕这个框架可以按需引用。

#用法
  -安装
  `
  npm install wayswipe --save
  `  
  
  -使用
  `
   import {vswipe, vswipeItem} from 'wayswipe' 
  ` 
  
  -来一个插槽slot
  
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
                          </div>
                      </vswipeItem>
                      <div class="line"></div>
                  </li>
              </transition-group>
          </vswipe>
```