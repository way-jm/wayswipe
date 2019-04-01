<template>
    <div id="app">
        <Header
                :title="mheader.title"
                :backicon="mheader.backicon"
                :borderBottom="mheader.borderBottom"
        >
        </Header>
        <!--使用
           通过插槽slot方式使用
           内容样式自定义，vswipe只关注组件本身功能
        -->
        <vswipe>
            <!--过度效果可以自定义,这里设置的height逐渐变成0-->
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
    </div>

</template>

<script>
    //引入wayswipe
    import {vswipe, vswipeItem} from 'wayswipe'
    //无关组件
    import Header from '@/components/header'

    export default {
        name: 'App',
        components: {
            vswipe, vswipeItem,Header
        },
        data() {
            return {
                mheader: {
                    title: "swipe演示",
                    backicon:'',
                    borderBottom:true
                },
                testArr: [
                    {name: '佐佐木希',hometown:'秋田县', age: '1988年2月8日',cl:'plus',tv:'天使之恋'},
                    {name: '新垣结衣',hometown:'冲绳', age: '1988年6月11',cl:'minus',tv:'花水木'},
                    {name: '上野树里',hometown:'兵库县', age: '1986年5月25',cl:'plus',tv:'摇摆少女'},
                ]
            }
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    ul
        background white
        width 100%
        li
            width 100%
            .content.plus
                div.price
                    color #FF4B4B
                div.gap span
                    background #FFE2E2
                    color #FF4B4B
            &.vswipe-enter-active, &.vswipe-leave-active
                transition: all .3s
                .content
                    transition: all .3s
            &.vswipe-enter, &.vswipe-leave-to
                .content
                    height: 0
                    line-height 0
                    font-size 0
                    opacity 0
                    div
                        font-size 0
                    span
                        opacity 0
            .content.minus
                div.price
                    color #2BAF79
                div.gap span
                    background #CFF3E4;
                    color #2BAF79
            .content
                line-height 50px
                height 50px
                width 100%
                display flex
                .gf
                    color: #959cab;
                div
                    flex 1
                div.price
                    color #434A5C;
                div.stock
                    padding-left 15px
                    text-align left
                    h1
                        height 25px
                        line-height 35px
                    h2
                        height 25px
                        line-height 15px
                        font-size: 11px;
                div.gap
                    text-align right
                    padding-right 15px

                    span
                        text-align center
                        width 65px
                        display inline-block
                        height 25px
                        line-height 25px
                        vertical-align middle
                        background #EDEDED
                        color: #434A5C;
                        border-radius: 4px;
      .line
          width 96%
          height 0
          margin 0 auto
          border-top 1px solid #F0F3F8;
</style>
