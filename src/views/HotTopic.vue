<template>
  <div class="container">
    <div class="article" v-for="(item,i) in previewList" v-on:click="toggle(item)">
      <div class="title">
        {{i}}{{item.title}}
        <span class="time">{{item.time}}</span>
       </div>
      <div class="info"  v-show="!item.show">
        {{item.info}}
        <div class="detail"><a href="http://mp.weixin.qq.com/s/ZdRnAIqx7r19Knbjc6Cirw">查看新闻</a>
        </div>
      </div>

    </div>

    <div align="center"><button class="button0"  @click.asyc="monclickbutton"> 加载更多 </button></div>
  </div>
</template>

<script  type="text/javascript">
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    Vue.use(VueResource)
    import { mapState } from 'vuex'

    // vuex常量
    import * as getProdListData from '../store/types/getProdListData-types'

    export default {
        name: 'HotTopic',
        data: function () {
            return {
            lastindex:0,
                item:'',
                index:'',
                previewList: []
            }
        },
        components: {
        },
        mounted: function () {
                   this.getHottopicsReset();
                   //let lastindex=index;
                    },
        methods: {
            monclickbutton(){
                this.getHottopics();
            },
            getHottopicsReset: function () {

                var _this = this
                this.$store.dispatch(getProdListData.ADD_PRODLISTDATA_ACTION_RESET).then(() => {
                    this.previewList = this.prodListData;
                });
            },
            getHottopics: function () {

                var _this = this
                this.$store.dispatch(getProdListData.ADD_PRODLISTDATA_ACTION).then(() => {
                    this.previewList = this.prodListData;
                });
            },
            toggle: function (item) {
                item.show = !item.show
            }

        },
        computed: {
            ...mapState({ //vuex 状态

                prodListData: state => state.getProdListData.prodListData

            })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin:0em 0.5em 0em 0.5em;
    padding:0;
  }
  .container{
    font-size:0.1em;
    margin-top:0em;

  }

  .article{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    padding-top: 1px;
  }
    .title{
    position: relative;
    line-height: 1.56em;
    color: #545454;
    font-weight: 500;
    cursor: pointer;
      font-size:11em;
      clear: left;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  }
  .title a{
    text-decoration:none;

  }
  .time{
    margin-left: 10px;
    font-size: 10px;
    color: #aaacb4;
  }
  .button0 {
    background-color: white;
    font-size: 14px;
    color: black;
    border-radius: 4px;
    width: 30%;
    height:50%;
    border: 0px solid #0099ff; /* Green */
    margin-top:20px;
    outline:0;
  }

  .info{
    margin-top: 5px;
    font-size: 8px;
    line-height: 1.8em;
    color: #aaacb4;
  }
  .detail{
    text-align:right;
    font-size:0.1em;
  }
  .addnews{

  }
</style>
