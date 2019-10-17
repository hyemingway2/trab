<template>
  <div id="notice">
    <swiper :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev" />
      <div class="swiper-button-next swiper-button-black" slot="button-next" />
      <div class="swiper-scrollbar" slot="scrollbar"/>
    </swiper>
    <div id="search">
      <input placeholder="여행지를 검색하세요!">
      <font-awesome-icon icon="search-location" size="2x" class="input-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Notice extends Vue {
  private data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  }
}
</script>

<style lang="scss">
  #notice {
    height: 500px;
    .swiper-wrapper {
      line-height: 500px;
      .swiper-slide {
        font-size: 100px;
        background-color: #eee;
      }
    }
  }
  #search {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    min-width: 280px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    .input-icon {
      transform: translate(-125%);
      -webkit-transform: translate(-125%);
      position: absolute;
      height: 100%;
    }
    input {
      font-size: 25px;
      width: 100%;
    }
  }
</style>