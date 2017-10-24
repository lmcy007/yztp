<style scoped lang="less">
  .container{

  }
  .button_add{
    text-align: center;
    line-height: 3em;
  }
  .article{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .title{
    position: relative;
    font-size: 16px;
    line-height: 1.56em;
    color: #545454;
    font-weight: 500;
    cursor: pointer;
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


<template>
<div class="container">
              <div class="article" v-for="item in list" v-on:click="toggle(item)">
                <div class="title">
                  {{item.title}}
                  <span class="time">{{item.time}}</span>
                </div>
                <div class="info"  v-show="!item.show">
                  {{item.info}}
                  <div class="detail"><a href="http://mp.weixin.qq.com/s/ZdRnAIqx7r19Knbjc6Cirw">查看新闻</a>
                  </div>
                </div>
              </div>
</div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

//图片地址
import { imgPUrl } from '../tools/url'
import Vue from 'vue'
import VueResource from 'vue-resource'
export default {
    name: 'productItemComponent',
    props: ['prodItem'],
    data() {
        return {
          item: '',
          list: []
        }
    },
  components: {
  },
  mounted: function () {
    this.getHottopics()
  },
  methods: {
    getHottopics: function () {
      var _this = this
      this.$http.get('../static/data.json')
        .then(function (res) {
          _this.list = res.body.hottopics.list
        })
        .catch(function (res) {
          console.log(res)
        })
    },
    toggle: function (item) {
      item.show = !item.show
    }
  }
}
</script>




