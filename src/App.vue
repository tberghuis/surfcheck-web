<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Surfcam camUrl="https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8" />
    <Surfcam camUrl="https://cams.cdn-surfline.com/cdn-au/au-ballinashellybeach/playlist.m3u8" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Surfcam from "./components/Surfcam.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Surfcam
  }
};
</script>

<style>
</style>
