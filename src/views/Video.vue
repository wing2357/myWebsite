<template>
    <div class="video-wrapper">
        <video width="80%" height="450px" autoplay="autoplay" controls="controls" mediatype="video" src="https://vdept.bdstatic.com/5233374a787479436139686b6e743753/4a48574c70414d37/73f2dac06d7fd81f4fc39cfd43b0dd8fe4f29be19fe93488d2ed0e07e9a67ff61c3251a6dd40244874c972b3d7b86b5d.mp4?auth_key=1591029093-0-0-0ee7698e9e2d7085fca92fbc15a47a57"></video>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .video-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: $bg-color;
    }

    video {
        margin-top: 100px;
    }
</style>
