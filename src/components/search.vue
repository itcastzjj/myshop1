<template>
  <div class="search">
    <div class="search-input">
      <icon type="search" size="32rpx"></icon>
      <span>搜索</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .search {
    width: 100%;
    height: 80rpx;
    background-color: #fe2c4b;
    // padding: 10rpx 0rpx;
    display: flex;
    align-items: center;
    .search-input {
      width: 90%;
      height: 60rpx;
      background-color: #fff;
      border-radius: 5rpx;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 32rpx;
        color: #999;
        padding: 0 10rpx;
      }
    }
  }
</style>

