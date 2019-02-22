<template>
  <div>
    <search></search>
    <div class="cate">
      <scroll-view scroll-y class="cate-left">
        <block v-for="(item,index) in catedata" :key="index">
          <div
            class="cate-left-list"
            @tap="addactive(index)"
            :class="{active:activenum===index}"
          >{{item.cat_name}}</div>
        </block>
      </scroll-view>
      <scroll-view scroll-y :scroll-top="toppation" class="cate-right">
        <block v-for="(item2,index2) in activeright" :key="index2">
          <div class="cate-right-title">
            <span>/</span>
            {{item2.cat_name}}
            <span>/</span>
          </div>
          <div class="cate-right-body">
           <block  v-for="(item3,index3) in item2.children" :key="index3">
              <div class="box">
                <image :src="item3.cat_icon" mode="aspectFit"></image>
                <div class="text">{{item3.cat_name}}</div>
              </div>
           </block>
          </div>
        </block>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search.vue";
import request from "@/utils/request.js";

export default {
  components: {
    Search
  },
  created() {
    this.getcate();
  },
  data() {
    return {
      catedata: [],
      activenum: 0,
      activeright: [],
      toppation:0
    };
  },
  methods: {
    addactive(index = 0) {
      this.activenum = index;
      // console.log(index);
      this.activeright = this.catedata[this.activenum].children;
      // console.log(this.catedata[index].children);
      this.toppation=0;
    },
    getcate() {
      request("https://www.zhengzhicheng.cn/api/public/v1/categories").then(
        res => {
          this.catedata = res.data.message;
          this.activeright = res.data.message[this.activenum].children;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.cate {
  position: fixed;
  top: 80rpx;
  bottom: 0;
  left: 0;
  right: 0;
  // background-color: #f00;
  display: flex;
  &-left {
    // background-color: #0f0;
    width: 200rpx;
    &-list {
      height: 100rpx;
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      line-height: 100rpx;
      font-size: 28rpx;
      &.active {
        background-color: #fff;
        border-left: 6rpx solid #fe2c4b;
      }
    }
  }
  &-right {
    // background-color: #00f;
    flex: 1;
    &-title{
      display: flex;
      justify-content: center;
      padding-top: 45rpx;
      span{
        color: #ccc;
        padding: 0 20rpx;
      }
    }
    &-body{
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      .box{
        margin-top: 65rpx;
          width: 33.33%;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          // align-content: center;

        image{
          width: 120rpx;
          height: 120rpx;
          margin: 0 auto;
        }
        .text{
          font-size: 28rpx;
          text-align: center;
       }
      }
    
    }
  }
}
</style>
