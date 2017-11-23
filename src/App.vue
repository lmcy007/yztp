<style lang="less" >
  *{
    margin:0;
    padding:0;
  }
    #app {
      border:1px solid #fff;width:100%;height:2em;

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

