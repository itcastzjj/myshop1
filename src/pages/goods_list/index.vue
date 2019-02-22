<template>
  <div class="goods-list">
    <div class="goods-list-header">
      <div class="goods-list-header-input">
        <div class="icon">
          <icon type="search" size="35rpx"></icon>
        </div>
        <input :value="catname.name" placeholder="请输入搜索关键词">
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request.js";

export default {
  data() {
    return {
      catname: {}
    };
  },
  onLoad(que) {
    // console.log(que);
    this.catname = que;
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  .goods-list-header {
    height: 120rpx;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    .goods-list-header-input {
      display: flex;
      align-items: center;
      height: 60rpx;
      padding-left: 20rpx;
      background-color: #fff;
      width: 90%;
      border-radius: 8rpx;
     
      input {
        height: 40rpx;
        font-size: 28rpx;
        padding-left: 20rpx;
      }
      .icon {
        // background-color: #fff;
        height: 60rpx;
        padding-top: 11rpx;
        box-sizing: border-box;
      }
    }
  }
}
</style>
