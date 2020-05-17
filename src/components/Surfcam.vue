<template>
  <div>
    surfcam {{camUrl}}
    <video ref="video" muted="muted"></video>
  </div>
</template>

<script>
import Hls from "hls.js";

export default {
  name: "Surfcam",
  props: {
    camUrl: String
  },
  mounted: function() {
    // `this` points to the vm instance
    console.log("surfcam is: " + this.camUrl);

    var video = this.$refs.video;

    console.log("video", video);

    // var videoSrc = "https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8";
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(this.camUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
  }
};
</script>

<style>
</style>