<template>
<!-- eslint-disable-->
<section>
<search-component></search-component>
<div class="container-lg">
  <br>
  <h2>{{$t('featureHackathon')}}</h2>
  <hackathons-items :data="feature" />
  <h2>{{$t('popularHackWorld')}}</h2>
  <hackathons-items :data="4"/>
  <h2>{{$t('virtualHackathon')}}</h2>
  <hackathons-items :data="4"/>
</div>

<banner-component style="display:block; height: auto;min-height: 670px;"/>

<div class="max-width-block mbt">

  <h2>{{$t('blockchainHackathon')}}</h2>
  <hackathons-items :data="4"/>
  <h2>{{$t('EverythingIoT')}}</h2>
  <hackathons-items :data="4"/>
  <h2>{{$t('popularHackWorld')}}</h2>
  <hackathons-items :data="4"/>
</div>

</section>
</template>


<script>

import SearchComponent from '@/components/Search'
import BannerComponent from '@/components/BannerBlock'
import HackathonsItems from '@/components/HackathonsItems'

import { mapGetters } from 'vuex'


export default {
  components: {
    SearchComponent,
    BannerComponent,
    HackathonsItems
  },
  layout: 'default',


  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName,
    feature:[]
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  created(){
    this.load();
  },
  methods:{
    load: async function(){
      await  fetch('http://hackathon.luisvilches.cl/hackathon/public',{method:'get'})
      .then(res => res.json())
      .then(response => {
        this.feature = response.data;
      })
    }
  }
}
</script>

<style lang="css" scoped>

  .mbt{
    margin-top: 300px;
  }

  h2{
    font-family: "Avenir Next" !important;
    font-weight: normal!important;
    font-size: 44px!important;
    margin-bottom: 20px;
  }
.second-section{

  display:inline-block;
  width: 100%;
}
.max-width-block{
    /* /* max-width: 1920px; */
    margin: 0 auto;
    padding: 0 80px;
}

@media(max-width: 768px){
  .max-width-block{
    /* /* max-width: 1920px; */
    margin: 0 auto;
    padding: 0 50px;
  }
}
.block-title {
  margin: 40px 0 20px;
  font-family: MontserratMedium;
  font-weight: normal;
  font-size: 44px; }

.box-wrapper{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}
.box-wrapper .box-item {
  flex-basis: calc(25% - 20px);
  height: auto;
  max-height: 420px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  color: #393f47;
  margin: 10px;
  }
.box-wrapper .box-item .item-img-container {
      width: 100%;
      height: 260px;
      background-color: #789acc;
      border-radius: 3px;
      box-shadow: 0px 1px 4px 1px rgba(49, 49, 49, 0.83); }

.box-wrapper .box-item .item-title {
      font-size: 22px;
      font-family: MontserratMedium;
      line-height: 1;
      margin-top: 15px; }

.box-wrapper .box-item .item-title, .box-wrapper .box-item .item-location, .box-wrapper .box-item .item-date {
      margin-bottom: 5px; }
.box-wrapper .box-item .item-title, .box-wrapper .box-item .item-location, .box-wrapper .box-item .item-date, .box-wrapper .box-item .item-participants {
      padding: 0 5px; }
.box-wrapper .box-item .item-location, .box-wrapper .box-item .item-date, .box-wrapper .box-item .item-participants {
      font-family: MontserratRegular; }
.box-wrapper .box-item .item-location, .box-wrapper .box-item .item-date, .box-wrapper .box-item .item-participants {
      font-size: 18px; }
      @media screen and (max-width: 1320px) {
.box-wrapper .box-item .item-location, .box-wrapper .box-item .item-date, .box-wrapper .box-item .item-participants {
          font-size: 13px; } }
    @media screen and (max-width: 980px) {
.box-wrapper .box-item {
        flex-basis: calc(50% - 20px);
        margin: 0 10px;
        height: auto;
        max-height: 420px;
        display: flex;
        flex-direction: column;
        color: #393f47; } }

         @media screen and (max-width: 1320px) {
    .block-title {
      font-size: 38px; } }

        @media only screen and (max-width: 500px) {
        .box-wrapper .box-item .item-img-container {
          width: 215px;
          height: 167px;
          background-color: #789acc;
          border-radius: 3px;
          -webkit-box-shadow: 0px 1px 4px 1px rgba(49, 49, 49, 0.83);
          box-shadow: 0px 1px 4px 1px rgba(49, 49, 49, 0.83); } }
          @media screen and (max-width: 1320px) {
        .box-wrapper .box-item .item-title {
          font-size: 16px; } }


/*# sourceMappingURL=hackathon-items.component.css.map */

</style>
