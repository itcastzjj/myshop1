<template>
  <div class="index">
    <search></search>
    <div class="swiper">
      <swiper indicator-dots autoplay circular>
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item.image_src" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="menu-fenlei">
      <div class="box" v-for="(item,index) in menudata" :key="index">
        <img :src="item.image_src" alt>
      </div>
    </div>
    <div class="floor" v-for="(item,index) in floordata" :key="index">
      <div class="floor-title">
        <image :src="item.floor_title.image_src" mode="aspectFit"></image>
      </div>
      <div class="floor-body">
        <div class="floor-body-left">
        <image :src="item.product_list[0].image_src" mode="aspectFit"></image>
        </div>
        <div class="floor-body-right">
        <image :src="item2.image_src" mode="aspectFit" v-show="index2!=0"  v-for="(item2,index2) in item.product_list" :key="index2"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js";
import Search from "@/components/search.vue";
export default {
  created() {
    this.swiperfun();
    this.menufun();
    this.floorfun();
  },
  components: {
    Search
  },
  data() {
    return {
      imgUrls: [
        "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/21099/35/7084/57855/5c6a830aE2a133334/677aa0a180ab472f.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/21099/35/7084/57855/5c6a830aE2a133334/677aa0a180ab472f.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/21099/35/7084/57855/5c6a830aE2a133334/677aa0a180ab472f.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ],
      menudata: [],
      floordata:[]
    };
  },
  methods: {
    swiperfun() {
      request('https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata').then(res => {
        this.imgUrls = res.data.message;
      });
    },

    menufun() {
     request('https://www.zhengzhicheng.cn/api/public/v1/home/catitems').then(res => {
        this.menudata = res.data.message;
        // console.log( this.menudata);
      });
    },
    floorfun(){
       request('https://www.zhengzhicheng.cn/api/public/v1/home/floordata').then(res => {
        this.floordata = res.data.message;
        // console.log( this.menudata);
      });
    }

  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.index {
 
  .swiper {
    image {
      width: 100%;
      height: 100%;
    }
  }
  .menu-fenlei {
    display: flex;
    justify-content: space-around;
    .box {
      padding: 10rpx;
      width: 128rpx;
      height: 140rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .floor{
      image{
        width: 100%;
        height: 100%;
        
      }
    .floor-title{
      width: 100%;
      height: 88rpx;
    
    }
    .floor-body{
       display: flex;
       width: 100%;
       height: 386rpx;
      .floor-body-left{
        width: 232rpx;
        height: 386rpx;
        margin-right: 10rpx;

      }
       .floor-body-right{
        width: 66.67%;
        height: 100%;
        image{
        margin-right: 10rpx;

          width: 233rpx;
          height: 188rpx;
        }
      }
    }
  }
}
</style>

