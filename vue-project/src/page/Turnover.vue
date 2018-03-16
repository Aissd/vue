<template>
    <div class="turnover">
        <div style="position: relative; top: 20px;">
            <div class="list flip" :class="{'in': currentPage == 'boxOne', 'out': currentPage != 'boxOne'}" v-show="currentPage == 'boxOne'">
                <div class="boxOne">BoxOne</div>
            </div>
            <div class="list flip" :class="{'in': currentPage == 'boxTwo', 'out': currentPage != 'boxTwo'}" v-show="currentPage == 'boxTwo'">
                <div class="boxTwo">BoxTwo</div>
            </div>
            <div class="list flip" :class="{'in': currentPage == 'boxThree', 'out': currentPage != 'boxThree'}" v-show="currentPage == 'boxThree'">
                <div class="boxThree">BoxThree</div>
            </div>
        </div>
        <div>
            <a href="javascript:;" @click="turnoverFn('boxOne')">BoxOne</a>
            <a href="javascript:;" @click="turnoverFn('boxTwo')">BoxTwo</a>
            <a href="javascript:;" @click="turnoverFn('boxThree')">BoxThree</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Turnover',
        data() {
            return {
                currentPage: 'boxOne',
            };
        },
        methods: {
            turnoverFn(url) {
                this.currentPage = url;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        position: absolute;
        width: 300px;
        height: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 30px;
        color: #000;
    }
    .boxOne {
        background-color: #aaa;
    }
    .boxTwo {
        background-color: #f00;
    }
    .boxThree {
        background-color: #0f0;
    }

    .flip {
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateX(0); /* Needed to work around an iOS 3.1 bug that causes listview thumbs to disappear when -webkit-visibility:hidden is used. */
        backface-visibility: hidden;
        transform: translateX(0);
    }
    .flip.out {
        -webkit-transform: rotateY(-90deg) scale(.9);
        -webkit-animation-name: flipouttoleft;
        -webkit-animation-duration: 175ms;
        transform: rotateY(-90deg) scale(.9);
        animation-name: flipouttoleft;
        animation-duration: 175ms;
    }
    .flip.in {
        -webkit-animation-name: flipintoright;
        -webkit-animation-duration: 400ms;
        animation-name: flipintoright;
        animation-duration: 400ms;
    }
    .flip.out.reverse {
        -webkit-transform: rotateY(90deg) scale(.9);
        -webkit-animation-name: flipouttoright;
        transform: rotateY(90deg) scale(.9);
        animation-name: flipouttoright;
    }
    .flip.in.reverse {
        -webkit-animation-name: flipintoleft;
        animation-name: flipintoleft;
    }
    @-webkit-keyframes flipouttoleft {
        from { -webkit-transform: rotateY(0); }
        to { -webkit-transform: rotateY(-90deg) scale(.9); }
    }
    @keyframes flipouttoleft {
        from { transform: rotateY(0); }
        to { transform: rotateY(-90deg) scale(.9); }
    }
    @-webkit-keyframes flipouttoright {
        from { -webkit-transform: rotateY(0) ; }
        to { -webkit-transform: rotateY(90deg) scale(.9); }
    }
    @keyframes flipouttoright {
        from { transform: rotateY(0); }
        to { transform: rotateY(90deg) scale(.9); }
    }
    @-webkit-keyframes flipintoleft {
        from { -webkit-transform: rotateY(-90deg) scale(.9); }
        to { -webkit-transform: rotateY(0); }
    }
    @keyframes flipintoleft {
        from { transform: rotateY(-90deg) scale(.9); }
        to { transform: rotateY(0); }
    }
    @-webkit-keyframes flipintoright {
        from { -webkit-transform: rotateY(90deg) scale(.9); }
        to { -webkit-transform: rotateY(0); }
    }
    @keyframes flipintoright {
        from { transform: rotateY(90deg) scale(.9); }
        to { transform: rotateY(0); }
    }
</style>


