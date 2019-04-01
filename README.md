# wayswipe

> A swipe component based on Vue.js

## Build Setup

``` bash
# install(安装)
npm install wayswipe

# use(使用)
javascript
import {vswipe,vswipeItem} from 'wayswipe'
 data(){
      return{
          testArr:[
              {name:'佐佐木希',age:'31'},
              {name:'新垣结衣',age:'33'},
          ]
      }
    },

template
<swipe>
      <transition-group name="swipe" tag="ul">
        <li v-for="(item,index) in testArr" :key="item.name" class="swipe-item-wrapper">
          <swipeItem
                  ref="swipeItem"
                  :index="index"
          >
            <div class="content" >
              <div class="stock">
                <h1 class="mbc1">{{item.name}}</h1>
                <h2 class="gf">{{item.age}}</h2>
              </div>
              <div  class="bf price">{{item.name}}</div>
              <div class="gap">
                <span>{{item.name}}</span>
              </div>
            </div>
          </swipeItem>

        </li>
      </transition-group>

    </swipe>

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
