<template>
    <header id="nav" :class="{'bg-dark': showBg}">
        <div class="logo">巴黎圣母院</div>

        <ul class="nav-list">
            <div class="nav-line" :style="{left: navLine.left, width: navLine.width}"></div>
            <li class="nav-item" v-for="(item, index) in navList" :key="index" @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave">
                <router-link :to="item.route">{{item.name}}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    function throttle(func, delay = 300) {
        let timer = null;
        let startTime = Date.now();

        return function() {
            let curTime = Date.now();
            let remaining = delay - (curTime - startTime);
            let context = this;
            let args = arguments;

            clearTimeout(timer);

            if (remaining <= 0) {
                func.apply(context, args);
                startTime = Date.now();
            } else {
                timer = setTimeout(func, remaining);
            }
        }
    }
    export default {
        data() {
            return {
                showBg: false,
                navLine: {
                    left: 0,
                    width: 0
                },
                navList: [{
                        name: '首页',
                        route: '/home'
                    },
                    {
                        name: '创作背景',
                        route: '/background'
                    },
                    {
                        name: '曲目单',
                        route: '/trackList'
                    },
                    {
                        name: '主创团队',
                        route: '/creativeTeam'
                    },
                    {
                        name: '视频',
                        route: '/video'
                    }
                ]
            }
        },

        mounted() {
            this.handleScroll();

            setTimeout(() => {
                this.handleMouseLeave();
            }, 500)
        },

        methods: {
            handleScroll() {
                const throttleFn = throttle(() => {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    
                    this.showBg = scrollTop > 150;
                }, 200);

                window.addEventListener('scroll', () => {
                    throttleFn();
                });
            },

            handleMouseEnter(e) {
                this.navLine.left = e.target.offsetLeft + 'px';
                this.navLine.width = e.target.offsetWidth + 'px';
            },

            handleMouseLeave() {
                let activeItem = document.getElementsByClassName('router-link-exact-active')[0].parentNode;

                this.navLine.left = activeItem.offsetLeft + 'px';
                this.navLine.width = activeItem.offsetWidth + 'px';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bg-dark {
        background-color: $bg-color;
    }

    #nav {
        position: fixed;
        top: 0;
        width: calc(100% - 100px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        height: 50px;
        font-size: 16px;
        -webkit-transition: linear .2s;
        transition: linear .2s;
        z-index: 999;

        .logo {
            color: $theme-color;
            font-size: 18px;
            font-weight: 700;
        }

        .nav-list {
            list-style: none;
            display: flex;
            margin: 0;
            height: 100%;
            align-items: center;
            padding: 0;
            position: relative;

            .nav-line {
                position: absolute;
                top: 0;
                left: 0;
                width: 50px;
                height: 4px;
                background-color: $theme-color;
                -webkit-transition: .3s cubic-bezier(.4, 0, .2, 1);
                transition: .3s cubic-bezier(.4, 0, .2, 1);
                z-index: 2;
            }

            .nav-item {
                padding: 0 15px;
                position: relative;
                height: 100%;
                display: flex;
                align-items: center;
            }

            a {
                color: #d2d2d2;
                text-decoration: none;
                display: inline-block;
                width: 100%;
                height: 100%;
                line-height: 50px;
                transition: linear .2s;

                &.router-link-exact-active {
                    color: $theme-color;
                }
            }
        }
    }
</style>
