<template>
    <section class="contents_top">
        <div class="post">
            <ul class="post_ul">
                <li class="post_li" v-for="(item, index) in teamList" :key="index">
                    <figure>
                        <div class="post_img">
                            <img :src="item.img" class="attachment-medium size-medium wp-post-image" :alt="item.title">
                            <div class="post_inner">
                                <p class="post_inner--name">{{item.name}}</p>
                            </div>
                        </div>
                        <figcaption class="post_title">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.name}}</a>
                        </figcaption>
                        <p class="post_url">{{item.title}}</p>
                    </figure>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                teamList: [{
                        title: '词作者Auteur吕克·普拉蒙东LUC PLAMONDON',
                        name: 'LUC PLAMONDON',
                        link: 'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%AF%8D%E9%99%A2/5658620?fr=aladdin',
                        img: require('../assets/img/01.jpg'),
                    },
                    {
                        title: '曲作者 Compositeur理查德·科西昂特RICHARD COCCIANTE',
                        name: 'RICHARD COCCIANTE',
                        link: 'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%AF%8D%E9%99%A2/5658620?fr=aladdin',
                        img: require('../assets/img/02.jpg'),
                    },
                    {
                        title: '导演Mise en scene吉勒·马休GILLES MAHEU',
                        name: 'GILLES MAHEU',
                        link: 'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%AF%8D%E9%99%A2/5658620?fr=aladdin',
                        img: require('../assets/img/03.jpg'),
                    },
                    {
                        title: '安杰洛·德尔·维奇奥ANGELO DEL VECCHIO饰卡西莫多Quasimodo',
                        name: 'ANGELO DEL VECCHI',
                        link: 'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%AF%8D%E9%99%A2/5658620?fr=aladdin',
                        img: require('../assets/img/04.jpg'),
                    },
                    {
                        title: '希巴·塔瓦吉HIBA TAWAJI饰埃斯梅拉达Esmeralda',
                        name: 'HIBA TAWAJI',
                        link: 'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%AF%8D%E9%99%A2/5658620?fr=aladdin',
                        img: require('../assets/img/05.jpg'),
                    },
                    {
                        title: '丹尼尔·拉沃伊DANIEL LAVOIE饰弗罗洛Frollo',
                        name: 'DANIEL LAVOIE',
                        link: 'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%AF%8D%E9%99%A2/5658620?fr=aladdin',
                        img: require('../assets/img/06.jpg'),
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    figure {
        margin: 0;
    }

    .contents_top {
        padding: 80px 60px 10px;
        background-color: $bg-color;
    }

    .post {
        max-width: 1580px;
        margin: 0 auto;
        transition: .2s ease-in-out
    }

    .post_ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
    }

    .post_li {
        height: 294px;
        width: 350px;
        margin: 0 0 60px;
        background-color: #fff;
        box-shadow: 0px 0px 2px 0px #000000
    }

    .post_img {
        position: relative;
        overflow: hidden;
        max-height: 229px
    }

    .post_inner {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        -webkit-transition: .3s;
        transition: .3s;
        opacity: 0
    }

    .post_li:hover .post_inner {
        opacity: 1
    }

    .post_img img {
        width: 120%;
        -webkit-transition: all .3s;
        transition: all .3s
    }

    .post_li:hover .post_img img {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        filter: grayscale(50%)
    }

    .post_inner--name {
        position: absolute;
        top: 15px;
        left: 15px;
        color: #fff;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        margin: 0;
    }

    .post_title {
        padding: 13px 15px 3px;
        font-size: 1.3rem;
        letter-spacing: .04rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }

    .post_title a {
        color: #666;
        text-decoration: none;
        font-size: 16px;
    }

    .post_title a:hover {
        color: #aaa
    }

    .post_url {
        font-weight: 400;
        margin: 0;
        padding: 0 16px;
        font-size: .9rem;
        letter-spacing: .03rem;
        color: #aaa;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
</style>
