<template>
  <div>
    <search></search>
    <div class="cate">
      <div class="cate-left">
           <block v-for="(item,index) in catedata" :key="index">
              <div class="cate-left-list">
                {{item}}
              </div>
           </block>
      </div>
      <div class="cate-right"></div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search.vue";

export default {
  components: {
    Search
  },
  data () {
    return {
      catedata:['1',2,3]
    }
  }
};
</script>

<style lang="scss" scoped>
.cate{
  position: fixed;
  top: 80rpx;
  bottom: 0;
  left:0;
  right:0;
  background-color: #f00;
  display: flex;
  &-left{
    background-color: #0f0;
    width: 200rpx;
  }
   &-right{
    background-color: #00f;
    flex: 1;
  }
}

</style>
