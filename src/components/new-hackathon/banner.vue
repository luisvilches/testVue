<template>
  	<section class="section">
        <div class="banner" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
            <div v-if="type === 'success'">
                <a @click="event" class="btn btn-lg btn-green mr-15 mb-20">{{val}}</a>
            </div>
            <div v-else-if="type === 'primary'">
                <a @click="event" class="btn btn-lg btn-blue mr-15 mb-20">{{val}}</a>
            </div>

            <div v-else>
                <a @click="event" class="btn btn-lg mr-15 mb-20">{{val}}</a>
            </div>
            <a class="btn btn-xs btn-black mr-15 mb-20">...</a>
        </div>
    </section>
</template>

<style scoped>
    .banner {
        width: 100%;
        height: 330px;
        overflow: hidden;
        background-position: center;
        margin-bottom: 30px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-top: 80px;
    }
</style>

<script>
export default {
  name:"banner",
  props:['val','type','img','event']
}
</script>
