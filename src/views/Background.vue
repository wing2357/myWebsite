<template>
    <div class="bg-wrapper">
        <div v-for="(item, index) in contents" :key="index">
            <div v-if="index % 2 === 0" class="content-wrapper left">
                <div class="content wow fadeInUp" data-wow-delay="0.3s">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="text">
                        {{item.text}}
                    </div>
                </div>
                <div class="img">
                    <img :src="item.img" />
                </div>
            </div>
            <div v-else class="content-wrapper right">
                <div class="img">
                    <img :src="item.img" />
                </div>
                <div class="content wow fadeInUp" data-wow-delay="0.3s">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="text">
                        {{item.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        WOW
    } from 'wowjs'

    export default {
        data() {
            return {
                contents: [{
                        title: '回顾大热之剧的诞生之初….',
                        img: require('../assets/img/09.jpg'),
                        text: '1998年9月16日，巴黎。这是《巴黎圣母院》在巴黎会议宫的首演，标志着法国音乐剧的重磅回归。而彼时坐在大厅的观众还不认识绝大多数的演员……但是《美人》（Bella）这首在所有电台中仅播放了三个月的歌曲，早已征服他们，评论家们击节称赏，口耳相传。这部由维克多▪雨果的著名小说改变而成的音乐剧成为了绝对不容错过的作品，而在黑暗中，它的创作者们正庆幸着他们在五年前遵从了自己的直觉……'
                    },
                    {
                        title: 'Q…卡西莫多的Q',
                        img: require('../assets/img/02.jpg'),
                        text: '一切都始于1993年。当时吕克、普拉蒙东翻阅着文学人物字典，为他下一部作品物色主人公。眼看就要放弃的时候，他翻到了字母Q和以Q开头的Quasimodo(卡西莫多）。于是，吕克重读了维克多·雨果的作品，在书页上记下他的灵感，一切就差音乐了。他马上想到了理查德·科西昂特，以及他创作的引人入胜的旋律。最初，理查德也很怀疑自己是否能担负起这样宏大的创作，便拉开了他收纳了自己乐曲的“抽屉”，让对方听了几首自己的创作，有几首在之后也成为了《巴黎圣母院》中的曲目，其中一首还节选出了《美人》的前三句旋律，成为了这部作品的经典之声....'
                    },
                    {
                        title: '三年的积淀',
                        img: require('../assets/img/03.jpg'),
                        text: '人都十分忙碌。当时，也就是在1995年初，两人在巴黎、罗马或蒙特利尔会面，一起推进计划。每一次会面都是充满魔力的，让人感受到歌词与音乐完美的结合。有一天，他们把所有的音乐片段都拼接到一起后，才发现自己已经创作了近三个小时的作品。于是，他们不得不删去12首曲目。'
                    },
                    {
                        title: '合适的人选',
                        img: require('../assets/img/04.jpg'),
                        text: '吕克·普拉蒙东曾深以为来自蒙特利尔的前卫戏剧家吉勒·马休不会和他一样选择如此古典的题材。然而，这位导演却已经熟知作品主题，并着手研究了爱斯梅拉达的人物形象以及她的三位爱慕者。他不断地探索着。就差一位制作人了。主创们组织了一场试听会。理查德自弹自唱了全部角色的歌曲，吕克讲述了每一场戏的情节。结果如何呢?“普拉蒙东的下一部音乐剧让我非常感兴趣，科西昂特的音乐也非常动人，而我自己就很喜欢维克多·雨果！”查尔斯，塔拉尔如是说。于是，1997年1月，他们与会议宫签订了1998年秋季的演出合约。这时，还需要...…'
                    },
                    {
                        title: '天籁之音',
                        img: require('../assets/img/05.jpg'),
                        text: '丹尼尔·拉沃伊(Daniel Lavoie)、依莲娜·赛加拉(Helene Segara)、加劳（Garou)、鲁诺·佩尔蒂埃(Bruno Pelletier)、拉克默维尔(LuckMervil)、帕特里克·费欧里(Patrick Fiori)和朱丽叶·泽纳缇(Julile Zenatti)组成了这部作品具有历史意义的首演阵容。以色列艺术家诺亚也曾同意在原声带内为爱斯梅拉达献声。剧中的音乐在马努·吉奥(Manu Guiot)的指导下，在巴黎艺术宫工作室(Studio Artistic Palace)制作合成。理查德·科西昂特还找来了雅尼科·拓普和塞尔日·佩拉通纳做编曲工作。他们一人弹奏贝斯，一人做键盘手，又联合了吉他手克劳德·恩格尔（Claude Engel)，打击乐演奏者马克·尚特罗(Marc Chantereau)和克劳德·萨尔米里（Claude Salmieri)，共同组成了一支乐队，演奏了剧中全部的音乐。弦乐部分将在罗马录制。效果可谓登峰造极。'
                    },
                    {
                        title: '天作之合',
                        img: require('../assets/img/06.jpg'),
                        text: '除了合作已久的蒙特利尔灯光师阿兰·洛尔蒂，吉勒·马休在欧洲找寻了视觉设计师。他选择了来自斯特拉斯堡歌剧界的克里斯蒂安·拉兹为他做布景设计，又邀请巴黎时尚圈的设计师弗雷德·萨塞尔(Fred Sathal)设计了演员的服装，最后在舞蹈方面，他找到了阿姆斯特丹的现代芭蕾舞艺术家马蒂诺·穆勒。音乐剧的创作有条不紊地进行着。就在首演的前一年，制作人查尔斯，塔拉尔决定在国会大厅的墙上悬挂一幅700米长的《巴黎圣母院》的巨幅画作。'
                    },
                    {
                        title: '屡获殊荣',
                        img: require('../assets/img/07.jpg'),
                        text: '从1999年起，《巴黎圣母院》在法国音乐之光颁奖礼上斩获了两个奖项：最佳音乐剧和最佳歌曲奖（《美人》）”；在魁北克获得最佳表演、最佳导演、最佳专辑以及最佳歌曲奖（《大教堂时代》），在摩纳哥世界音乐大奖上，荣获最佳法语唱片奖，2000年初，该剧凭借其第一年惊人门票销量被收录进吉尼斯世界记录大全。'
                    },
                    {
                        title: '永不落幕的巡演',
                        img: require('../assets/img/08.jpg'),
                        text: '法语版《巴黎圣母院》在全球各地进行了巡演:瑞士、加拿大、摩纳哥、瑞典、意大利、黎巴嫩、中国大陆（当时也是中国大陆首部引进的外国音乐剧）、韩国、中国台湾、新加坡、俄罗斯、日本、卢森堡和土耳其。此外，该剧还被制作成多个语言版本：2000年的英语版、2001年的西班牙语版，2002年的意大利语版和俄语版、2007年的韩语版、2010年的佛拉芒语版、2016年的波兰语版..……于是，《美人》得以被各国语言传唱。'
                    }
                ]
            }
        },

        mounted() {
            new WOW().init();
        }
    }
</script>

<style lang="scss" scoped>
    .content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;

        .img {
            position: relative;
            width: 600px;
            height: auto;
            overflow: hidden;
            flex-shrink: 0;

            img {
                position: relative;
                width: 100%;
            }
        }

        .content {
            position: relative;
            padding: 60px;
            width: 100%;
            line-height: 2em;

            .title {
                font-size: 36px;
                margin-bottom: 40px;
            }
        }
    }
</style>
