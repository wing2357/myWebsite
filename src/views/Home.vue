<template>
    <div>
        <div class="bg-wrapper">
            <img src="../assets/img/09.jpg" />
        </div>
        <div class="content-wrapper">
            <div v-for="(content, index) in contents" :key="index" :style="{'animation-delay': (index + 1) + 's'}"
                class="content animated fadeInUp">{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contents: [
                    '谁能想到昨日蔚蔚庄严，今日会付之一炬？',
                    '谁能想到昨日谈笑风生，今日却天人相离？',
                    '无常的背后，谁能解开“命运”的谜题？',
                    '当诗人雨果在巴黎圣母院残垣断壁上看到这两个字的时候，他内心里汹涌的故事，却是那些对抗命运的力量。宁愿在人性的弱点中沉沦，也不愿在伊甸园中被圈养。善良、放荡、诱惑、丑陋，欲望甚或死亡，在“神”的教堂里他写满了“人”的乐章。',
                    '赞美天国也好，期待轮回也好，但最重要的，是我们自己要把握这一程人生。顺境也好，挫败也罢，一切福田，皆在方寸，只要信念都在，愿望终会达成。'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .bg-wrapper {
        img {
            position: relative;
            width: 100%;
            height: auto;
        }
    }

    .content-wrapper {
        position: fixed;
        top: 150px;
        left: 50px;
        width: 500px;

        .content {
            text-align: left;
            color: $text-color;
            margin-bottom: 20px;
            font-size: 18px;
            line-height: 1.5em;
        }
    }
</style>
