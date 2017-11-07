<template>
  <div id="containerID" class="container">
    <div v-bind:id="i" class="article" v-for="(item,i) in previewList" v-on:click="toggle(item),outlineart(item.show,i)">
      <div class="title">
        {{i}}{{item.name}}
       </div>
      <ul>
      <li class="info" v-for="(m,k) in item.article"  v-show="!item.show">
        <div>{{m.title}}</div>
      </li>
      </ul>
    </div>
    <div align="center"><button class="button0"  @click="monclickbutton"> 加载更多 </button></div>

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
        name: 'TmtNews',
        data: function () {
            return {
                item:'',
                index:'',
                aId:"0",
                previewList: []
            }
        },
        components: {
        },
        mounted: function () {
                   this.getHottopics();
                    },
        methods: {
            monclickbutton(){
                this.getHottopics();
            },

            getHottopics: function () {

                var _this = this;

                this.$store.dispatch(getProdListData.ADD_AUTHORLISTDATA_ACTION).then(() => {
                    this.previewList = this.authorListData;

                });
            },
            toggle: function (item) {
                item.show = !item.show;

                          },
            outlineart:function(a,i){


                if(a==0){
                document.getElementById(i).style.outline="thin solid #f00";
                  //$("#i").attr("class", "articleChange");

                  //document.getElementById("authorID").style.visibility='visible';
              }
             else{

                document.getElementById(i).style.outline="none";
             }
            }

        },
        computed: {
            ...mapState({ //vuex 状态

                authorListData: state => state.getProdListData.authorListData

            })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    font-size:0.1em;

  }
  .Newimg{
    float:right;
  }
  .article{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    padding-top: 10px;
    outline:none ;

  }
    .title{
    position: relative;
    font-size: 16px;
    line-height: 1.56em;
    color: #545454;
    font-weight: 500;
    cursor: pointer;
      font-size:14px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  }
  .title a{
    text-decoration:none
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
    border: 0.2px solid #0099ff; /* Green */
    margin-top:20px;;
  }

  .info{
    margin-top: 5px;
    font-size: 14px;
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
