<style scoped lang="less" scoped>
  .vindex{
    font-family:华文宋体;
      font-size:1em;
    margin: 1% 0% 0% 1%;
  }
  .title{
    word-spacing: 1em;
    text-align:justify;
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
    line-height: 2em;
      display: block;

  }
  .nav a{
    font-family:华文宋体;
    text-decoraction:none
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
    word-break:  keep-all;
    white-space:nowrap;
    display:inline-block;
    vertical-align:middle;
    font-family: 华文宋体;
    line-height: 2em;
}
    .Ltitle0{
        text-align:center;
    }

</style>


<template>
    <div class="vindex">
    <div class="title">
      <div class="Ltitle0">
          <img style='vertical-align: middle;'src="../assets/yuzitongpaologo.png"  alt="Readhub">
        <div class="Ltitle">与子同袍</div>
      </div>
        <div class="nav">
               <router-link to="/" style="text-decoration:none">同袍原创</router-link>
               <router-link to="/TmtNews" style="text-decoration:none">军事新闻</router-link>
               <router-link to="/DeveloperInfo" style="text-decoration:none">其他热点</router-link>
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
