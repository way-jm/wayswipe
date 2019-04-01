<template>
    <div>
        <div id="mheader" :style="{ background: bgColorArr[bgColor],color:titleColor,borderBottom:borderBottom?'1px solid #E7E7E7':''}">
            <div class="topBlank"></div>
            <div class="content bf" v-if="content" :style="shadow?styleobj:''">

                {{title}}
            </div>

        </div>
        <div :class="content? 'empty':'space'"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            title: {
                type: String,
                required: true
            },
            bgColor: {
                type: String,
                default:'themeWhite'
            },
            titleColor: {
                type: String,
                default:'#434A5C'
            },
            shadow:{
                type:Boolean
            },
            news:{
                type:Boolean,
                default:false
            },
            subtitle: {
                type: String,
            },
            backtitle: {
                type: String,
            },
            subtitlesize: {
                type: String,
                default:'16px'
            },
            subtitleWeight:{
                type: String,
                default:'normal'
            },
            borderBottom:{
                type:Boolean,
                default:false
            },
            backicon: {
                type: String,
                default:'&#xe632;'
            },
            topath: {
                type: String,
            },
            backFun:{
                type: String,
                default:''
            },
            content: {
                type:Boolean,
                default: true
            },
            tabShow:{
                type:Number,
                default: 1
            }
        },
        data(){
            return {
                styleobj:{
                    'box-shadow': '0 2px 4px 0 rgba(103,103,103,0.14)'
                },
                bgColorArr: {
                    theme: ' linear-gradient(-180deg, #FB8A8A , #fb7476 )',
                    themeWhite: 'white',
                    themeDark: '#383F54',
                },
                subcolor:''

            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #mheader
        box-sizing border-box
        position: fixed
        width: 100%
        font-size: 18px
        z-index: 200
        top 0
        left 0
        font-weight: bold
        .topBlank
            height: 20px
        .content
            height:44px
            line-height: 44px
            text-align: center
            span
                position: absolute
                left: 5px
                font-size: 12px
                display: inline-block
                i
                    font-size 22px
                    margin-right 3px
        .noshadow .content
            box-shadow: 0 2px 4px 0 rgba(103,103,103,0.14);

    .empty
        height: 64px
        width: 100%;
        box-sizing: border-box;
    .space
        height: 20px
        width: 100%;
        box-sizing: border-box;
</style>