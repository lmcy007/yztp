<style scoped lang="less" scoped>
  .vindex{
    font-family:黑体;
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
    font-family: 楷体;
    line-height: 2em;
  }
  .nav a{
    font-family:楷体;
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

}
.button0 {
     background-color: white;
     font-size: 14px;
     color: black;
     border-radius: 4px;
     width: 30%;
     height:50%;
     border: 0.2px solid #0099ff; /* Green */
 }
</style>


<template>

<div class="wrap--scroll" @click.asyc="monclickbutton">
    <div class="vindex">
    <div class="title">
      <img style='vertical-align:middle'src="../assets/logo-2.jpg"  alt="Readhub">
           <div class="nav">
             <router-link to="/" style="text-decoration:none">同袍原创</router-link>
             <router-link to="/TmtNews" style="text-decoration:none">军事新闻</router-link>
             <router-link to="/DeveloperInfo" style="text-decoration:none">其他热点</router-link>
           </div>
           </div>
    </div>
     <ul class="product-list" ref="prodList" :style="{paddingTop: lineTopHeight +'px',paddingBottom: lineBottomHeight +'px'}">
                <li v-for="(item, index) in previewList " :key="index">
                    <router-view></router-view>
                </li>
            </ul>
      <div align="center"><button class="button0"> 加载更多 </button></div>
    </div>
</template>



<script type="text/javascript">
import { mapState } from 'vuex'

// vuex常量
import * as getProdListData from '../store/types/getProdListData-types'

//组件导入
export default {
    name: 'productListComponent',
    components: {  },
    data() {
        return {
            /* 无限加载参数 */
            lastScrollTop: null,
            distance: 44,
            lineTopHeight: 0,
            lineBottomHeight: 0,
            canLoadmore: true,
            previewList: [],
            displayCount: 100,
            itemHeight: 357,
            itemWidth: 328,
            canScroll: true
        }
    },
    mounted() {
        // 获取数据
        this.getProdListData();
    },
    methods: {
    monclickbutton(){
            this.getProdListData();
             },
        getProdListData() {//获取数据
            // 获取导航列表
            this.$store.dispatch(getProdListData.ADD_PRODLISTDATA_ACTION).then(() => {
                //获取数据
                this.previewList = this.prodListData;
                //切换页面重置视窗
                //this.resetView();
                //重置数据
                //this.initData();
                //this.handleScroll();
            });

        },
        resetView() {//切换页面重置视窗
            this.lineTopHeight = 0;
            this.lineBottomHeight = 0;
            this.$el.scrollTop = 0;
        },
        /* 无限加载方法 */
        initData() {
            // init all data
            this._rowsInWindow = 1;//Math.ceil(this.$el.offsetHeight / this.itemHeight);//可视区域内多少行
            this._above = this._rowsInWindow * 2;//可视区域上方多少行，一般高度为screen高度的2倍
            this._below = this._rowsInWindow;//可视区域下方多少行
            this._max = this._rowsInWindow * this.itemHeight; // 可视区域最大距离
            this._column = ~~(this.$el.offsetWidth / this.itemWidth); // 计算一列几个元素
        },
        handleScroll() {
            let _scrollTop = this.$el.scrollTop,//滚动距离
                _height = this.$refs.prodList.offsetHeight,//产品列表的高度
                _contentHeight = this.$el.offsetHeight;//屏幕容器的距离

            let _rowsInScrollTop = _scrollTop / this.itemHeight, // 获得滚动了多少行
                _dataLen = this.prodListData.length//数据长度

            // 计算当前屏幕上的行数
            if (_rowsInScrollTop - Math.floor(_rowsInScrollTop) > 0.5) {
                this.displayCount = Math.ceil(_rowsInScrollTop);
            } else {
                this.displayCount = Math.floor(_rowsInScrollTop);
            }

            // 如果超过最大高度,重置previewList
            if (this.lastScrollTop === null || Math.abs(_scrollTop - this.lastScrollTop) > this._max) {
                this.lastScrollTop = _scrollTop;
            } else {
                if (this.to === _dataLen && _height - _scrollTop - _contentHeight < this.distance) {
                    this.canScroll && this.loadmore(this.from, this.to);
                }
                return;
            }

            // 计算数据取出的开始值和结束值
            let _from = (parseInt(_rowsInScrollTop) - this._above) * this._column;
            if (_from < 0) {
                _from = 0;
            }
            let _to = _from + (this._above + this._below + this._rowsInWindow) * this._column;
            if (_to > _dataLen) {
                _to = _dataLen;
            }
            this.from = _from;
            this.to = _to;

            // 设置头部高度和底部高度
            this.lineTopHeight = _from / this._column * this.itemHeight;
            this.lineBottomHeight = (_dataLen - _to) * this.itemHeight;


            this.resetPreviewList(this.from, this.to);

        },
        loadmore(from, to) {
            if (!this.canLoadmore) return;
            this.canLoadmore = false;
            // fetch mock
            let id = 'id=0001';
            // 获取数据
            this.$store.dispatch(getProdListData.ADD_PRODLISTDATA_ACTION).then(() => {
                let data = this.prodListData;//数据
                let _from = from, _to = to + this._below * this._column;
                this.resetPreviewList(_from, _to);
                this.lineBottomHeight = (data.length - _to) * this.itemHeight;
                this.canLoadmore = true;
            });

        },
        resetPreviewList(from, to) {
            //reset previewList
            let data = this.prodListData;//数据
            this.previewList = [];
            for (; from < to; from++) {
                this.previewList.push(data[from])
            }


        }
    },
    computed: {
        ...mapState({ //vuex 状态
                   prodListData: state => state.getProdListData.prodListData
               })
    },
    watch: {
        '$route'(to, from) {
            // 获取数据
            this.getProdListData();
        }
    }

}
</script>
