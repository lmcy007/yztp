<style lang="less">
*{
  margin:0 0em 0 0em;
  padding: 0;
}
    #app {
       margin:0 auto;border:1px solid #fff;width:100%;height:2em;
  }
</style>

<template>
  <div id="app">
    <product-list-component />

  </div>
</template>

<script>
  //组建引用
  import productListComponent from './components/productListComponent'

  export default {
    name: '',
    components: { productListComponent }
  }
</script>

