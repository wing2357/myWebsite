<template>
    <div class="track-list-wrapper">
        <el-carousel height="500px" :autoplay="false" indicator-position="outside" @change="handleChange">
            <el-carousel-item v-for="(item, index) in carouselList" :key="index">
                <img :src="item.img" class="carousel-img">
            </el-carousel-item>
        </el-carousel>

        <div v-for="(item, index) in carouselList[carouselIndex].content" :key="index" class="content-wrapper">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carouselIndex: 0,
                carouselList: [{
                        img: require('../assets/img/06.jpg'),
                        content: [{
                                title: '大教堂时代',
                                text: '游吟诗人格兰古瓦向人们讲述大教堂时代和它的未来。'
                            },
                            {
                                title: '非法移民',
                                text: '在巴黎圣母院前庭广场上风餐露宿的非法移民们，在他们领头人克洛班的呼吁下，一齐祈求底护之所。'
                            },
                            {
                                title: '那罗洛干预',
                                text: '巴黎圣母院的主教代理弗罗洛命令菲比斯驱逐流浪汉们。菲比斯遵循了命令，但在和爱斯梅拉达对峙时，他迟疑了……'
                            },
                            {
                                title: '爱斯美拉达之舞',
                                text: '…爱斯梅拉达向菲比斯解读了掌纹的含义'
                            },
                            {
                                title: '波西米亚少女',
                                text: '爱斯梅拉达用歌声表达了她生为波西米亚'
                            },
                            {
                                title: '人的骄傲',
                                text: '爱斯美拉达，你知道吗?克洛班让爱斯梅拉达要小心男人的险恶…'
                            },
                            {
                                title: '钻石',
                                text: '菲比斯和他的未婚妻小百合互诉衷肠。'
                            },
                            {
                                title: '愚人庆典',
                                text: '格兰古瓦主持了愚人庆典。鬼脸最可饰的人会被选为愚人教量。'
                            },
                            {
                                title: '愚人大王',
                                text: '驼背病腿的卡西莫多只要出现就能被选成愚人大王。'
                            },
                            {
                                title: '女巫',
                                text: '弗罗洛提出要捞走爱斯梅拉达，并把她关在巴黎圣母院，用家教的力量教化她。'
                            },
                            {
                                title: '弃儿',
                                text: '卡西莫多无法拒绝弗罗洛的要求，因为是弗罗洛在他还是孩子的时候收留了他，并像一位父亲那样将他抚养成人。',
                            },
                            {
                                title: '巴黎城门',
                                text: '午夜时分，城门紧闭。让我们随着格兰古瓦的步伐走进隐秘之夜。',
                            },
                            {
                                title: '劫持',
                                text: '卡西莫多尝试拂走爱斯梅拉达。菲比斯出现逮捕了卡西莫多，并向爱斯梅拉达提出到爱情之谷酒店幽会。躲在暗处的弗罗洛，听到了这一切。',
                            },
                            {
                                title: '奇迹宫殿',
                                text: '爱斯梅拉达在奇迹宫殿得到了底护。尾随她前来的格兰古瓦被克洛班判处绞刑。想要得到数免，就得有女子嫁给他……爱斯梅拉达站了出来，成为他名义上的妻子。',
                            },
                            {
                                title: '“菲比斯”的含义',
                                text: '爱斯梅拉达向格兰古瓦问起菲比斯这个名字的含义。',
                            },
                            {
                                title: '他如阳光般迷人',
                                text: '爱斯梅拉达和小百合遇相唱咏起自己的爱人。',
                            },
                            {
                                title: '“菲比斯”的含义',
                                text: '爱斯梅拉达向格兰古瓦问起菲比斯这个名字的含义。',
                            },
                            {
                                title: '心撕裂',
                                text: '菲比斯因爱上两个女人而觉得心痛欲裂。',
                            },
                            {
                                title: '宿命',
                                text: '格兰古瓦向弗罗洛请教，刻在圣母院石壁上的词语有何含义。',
                            },
                            {
                                title: '我要喝水',
                                text: '卡西莫多因企图诱拐爱斯梅拉达而被判车轮行。而爱斯梅拉达却喂水给他喝。',
                            },
                            {
                                title: '美人',
                                text: '卡西莫多、弗罗洛和菲比斯用歌声表达了他们对爱斯梅拉达的感情。',
                            },
                            {
                                title: '我的家，就是你的家',
                                text: '受完车轮刑的卡西莫多在教堂发现了爱斯梅拉达，并提出要保护她。',
                            },
                            {
                                title: '异教徒的圣母颂',
                                text: '爱斯梅拉达为教堂所展现的灵性而感动。',
                            },
                            {
                                title: '如果你能看清我',
                                text: '卡西莫多成为唯一一个真正用心爱慕爱斯梅拉达的人。',
                            },
                            {
                                title: '你将我毁灭',
                                text: '弗罗洛感觉已走上了自我毁灭的道路。',
                            },
                            {
                                title: '影子',
                                text: '弗罗洛尾随菲比斯，跟着他奔赴那场决定命运的约会。',
                            },
                            {
                                title: '爱情之谷',
                                text: '正当爱斯梅拉达要委身于菲比斯的时候，暗中窥伺着的弗罗洛攻击了菲比斯并迅速离开。士兵们逮捕了爱斯梅拉达。',
                            },
                            {
                                title: '天命难违',
                                text: '格兰古瓦援引宿命的含义，叹其是命运的主宰。',
                            }
                        ]
                    },
                    {
                        img: require('../assets/img/08.jpg'),
                        content: [{
                                title: '佛罗伦萨',
                                text: '弗罗洛和格兰古瓦讨论了一些会颠种世界、肃清旧思想的观念。'
                            },
                            {
                                title: '钟',
                                text: '卡声莫高不再献钟。爱斯梅拉达的失踪让他着急得发疯。'
                            },
                            {
                                title: '她在哪?',
                                text: '弗罗造成伪地担优起爱斯梅拉达的命运。格兰告瓦向克洛班透露爱斯梅拉达身陷国圆。'
                            },
                            {
                                title: '笼中鸟',
                                text: '爱斯梅垃达向卡商莫多发出了求牧的信号。着急方分的卡南真多四处搜寻她的身影。'
                            },
                            {
                                title: '判有罪',
                                text: '克洛班和非法移民们被速捕。'
                            },
                            {
                                title: '审讯',
                                text: '爱斯梅拉达押去审判，还被指控刺伤了菲比斯。'
                            },
                            {
                                title: '拷问',
                                text: '法官对爱斯梅拉达动用了刑罚。而她只承认自已对菲比斯的爱恋。法官判决对爱斯梅拉达施以绞刑。'
                            },
                            {
                                title: '一个神父爱上了她',
                                text: '弗罗洛卸下法官的面目，面对起自己的内心。'
                            },
                            {
                                title: '菲比斯',
                                text: '爱斯梅拉达得知菲比斯并未丧命，祈盼他能回来解救她。'
                            },
                            {
                                title: '回到你身边',
                                text: '菲比斯回到小百合的身边，并声称他之前是受到了波西米亚女郎的魅惑。'
                            },
                            {
                                title: '马背上的你',
                                text: '小百合表明，只要爱斯梅拉达还活着，就会拒绝与菲比斯完婚。'
                            },
                            {
                                title: '一天早晨你跳着舞',
                                text: '…爱斯梅拉达确信菲比斯会来救地，驳斥了弗罗洛的示爱。，并拒绝了他的最后通牌：“委身于他即可获得自由”，于是，弗罗洛扑向了她。'
                            },
                            {
                                title: '笼已碎',
                                text: '跟踪弗罗洛的卡西莫多，放走了克洛班及一众非法移民。克洛班击倒弗罗洛，救出了爱斯梅拉达。卡西莫多把他们带去了圣母院，希望大家能得到庇护。'
                            },
                            {
                                title: '月',
                                text: '格兰古瓦折求月亮能够倾听卡西莫多的悲歌。'
                            },
                            {
                                title: '留给你一个哨子',
                                text: '卡西莫多向爱斯梅拉达伸出了援手。'
                            },
                            {
                                title: '上帝那样偏心',
                                text: '卡西莫多控诉世间的不公。'
                            },
                            {
                                title: '为爱的人活下去',
                                text: '爱斯梅拉达明白了她的命运不是为爱活着，就是为爱死去。'
                            },
                            {
                                title: '进攻圣母院',
                                text: '弗罗洛决定报复，于是下令让菲比斯驱逐非法移民。克洛班在进攻时丧命，临死之际，他嘱托爱斯梅拉达要延续他的抗争。'
                            },
                            {
                                title: '放逐',
                                text: '菲比斯对爱斯梅拉达宣读了她的判决。她被押送到了前庭广场的绞刑架。'
                            },
                            {
                                title: '主人，救命恩人',
                                text: '弗罗洛站在圣母院的顶层，观看了绞刑。卡西莫多明白了他的所作所为，扼住了他的喉咙，将他推下了楼。'
                            },
                            {
                                title: '把她还给我',
                                text: '卡西莫多嘶吼着让人把爱斯梅拉达的遗体交给他。'
                            },
                            {
                                title: '再为我跳支舞',
                                text: '卡西莫多怀抱爱斯梅拉达的尸身，为爱殉葬。'
                            }
                        ]
                    }
                ]
            }
        },

        methods: {
            handleChange(e) {
                this.carouselIndex = e;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .track-list-wrapper {
        padding-bottom: 50px;
    }

    .carousel-img {
        width: 100%;
        height: auto;
    }

    .content-wrapper {
        margin-top: 40px;

        .title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 15px;
        }
    }
</style>
