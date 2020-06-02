<template>
    <div id="app">
        <Nav></Nav>

        <div id="view">
            <router-view />
        </div>
    </div>
</template>

<script>
    import Nav from './components/Nav.vue'

    export default {
        name: 'app',
        components: {
            Nav
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    #app {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        text-align: center;
        color: #2c3e50;
    }

    #view {
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    body::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 10px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    body::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #e0e0e0;
    }

    body::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }

    body::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background: #f5f5f5;
    }
</style>
