<style scoped lang="less" scoped>
  .vindex{
    font-family:华文宋体;
      font-size:0.9em;
      line-height: 5em;

  }
  .title{
      word-spacing: 1em;
      text-align:center;
  }
  .line{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 1px;
    padding-top: 10px;
  }

  .nav{
     word-break:  keep-all;
    white-space:nowrap;
    display:inline-block;
    vertical-align:middle;
    font-family: 华文宋体;
    line-height: 5em;
     display: block;


  }
  .nav a{
    font-family:华文宋体;
      font-size:1.2em;
    text-decoraction:none;

  }
  a.router-link-exact-active{
    font-weight: bold;

  }
.wrap--scroll {
  padding: 30px 20px;
}

.navigation-tit {
    display: flex;
    align-items: center;
}

h1 {
    flex: 1;
    color: #E5DAC7;
    font-size: 48px;
}


.filter {
    margin-left: auto;
    display: flex;
    right: 10px;
    top: 40px;
    z-index: 20;
}

.product-list {
list-style: none;
}
.Ltitle{
 font-size:1.2em;
    vertical-align: middle;;
}
    .Ltitle0{
        text-align:center;
        line-height:3em;
        border-bottom: 4px solid #F2F2F2;
        padding-bottom: 20px;
        padding-top: 10px;
    }
    .Lcontext{
        font-size:1em;
        color: #aaacb4;
        line-height:2em;
    }

  .nav-item{

      text-align:center;
      vertical-align:middle;

    width:50%;

      float:left;
 }
  .nav-item1{

      text-align:center;
      vertical-align:middle;

      width:50%;

      float:right;
  }
</style>


<template>
    <div class="vindex">
        <div class="Ltitle0">
            <img style='vertical-align: middle;'src="../assets/yuzitongpaologo.jpg"  width="30em" alt="Readhub">
            <span class="Ltitle">与子同袍</span>
            <div class="Lcontext">有温度的故事，有深度的评论，涨姿势的时文，尽在这里。</div>
         </div>

        <div class="title">
        <div class="nav">
            <div class="nav-item"><router-link to="/" style="text-decoration:none">【同袍原创】</router-link></div>
            <div class="nav-item1"><router-link to="/TmtNews" style="text-decoration:none">【同袍作者】</router-link></div>
        </div>
        </div>
        <router-view></router-view>
    </div>
</template>



<script type="text/javascript">
import { mapState } from 'vuex'

// vuex常量
import * as getProdListData from '../store/types/getProdListData-types'
import HotTopic from '../views/HotTopic.vue'
//组件导入
export default {
    name: 'productListComponent',
    components: { HotTopic },
    data() {
        return {

        }
    },

}
</script>
