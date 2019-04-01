<template>
  <div id="app">
    <VSwipe>
      <transition-group name="swipe" tag="ul">
        <li v-for="(item,index) in testArr" :key="item.name" class="swipe-item-wrapper">
          <VSwipeItem
                  ref="swipeItem"
                  :index="index"
                  @btn-click="onBtnClick"
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
          </VSwipeItem>
          <div class="line"></div>

        </li>
      </transition-group>

    </VSwipe>
  </div>
</template>

<script>
  import VSwipe from './components/vswipe'
  import VSwipeItem from './components/vswipeItem'

  export default {
    name: 'App',
    components: {
      VSwipe,VSwipeItem
    },
    data(){
      return{
        testArr:[
          {name:'佐佐木希',age:'32'},
          {name:'新垣结衣',age:'32'},
        ]
      }
    },
    methods:{
      onBtnClick(){
        alert('123');
      }
    }
  }
</script>

