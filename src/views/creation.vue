<template>
  <div class="container">
    <div class="article" v-for="item in list" v-on:click="toggle(item)">
      <div class="title">

        <span class="autor">{{item.autor}}</span>
        <span class="time">{{item.time}}</span>
      </div>
      <div class="info">
        {{item.info}}
      </div>
      <img src="../assets/640.jpg" alt="配图1">
      <img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1301/11/c1/17314131_1357893305130.jpg" alt="配图2">
      <div>{{item.img}}</div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default {
    name: 'creation',
    data: function () {
      return {
        item: '',
        list: []
      }
    },
    components: {
    },
    mounted: function () {
      this.getcreation()
    },
    methods: {
      getcreation: function () {
        var _this = this
        this.$http.get('../static/data.json')
          .then(function (res) {
            _this.list = res.body.creation.list
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
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
  .time{
    margin-left: 10px;
    font-size: 10px;
    color: #aaacb4;
  }
  .autor{
    margin-left: 10px;
    font-size: 10px;
    color: #aaacb4;
  }
  .info{
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.8em;
    color: #aaacb4;
    text-indent:2em
  }

</style>
