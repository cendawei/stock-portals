<template>
    <div class="page preview js_show">
        <!--<div class="page__hd">
            <h1 class="page__title">Preview</h1>
            <p class="page__desc">停牌详情</p>
        </div>-->
        <div class="page_bd">
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">{{detail["code"]}}</label>
                        <em class="weui-form-preview__value">{{detail["name"]}}</em>
                    </div>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">市场</label>
                        <span class="weui-form-preview__value">{{detail["market"]}}</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">停牌原因</label>
                        <span class="weui-form-preview__value">{{detail["reason"]}}</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">停牌期限</label>
                        <span class="weui-form-preview__value">{{detail["expire"]}}</span>
                    </div>
                    <div class="weui-form-preview__item">
                        <label class="weui-form-preview__label">停牌开始时间/停牌结束时间</label>
                        <span class="weui-form-preview__value">{{startTime}} / {{endTime}}</span>
                    </div>
                </div>
                <div class="weui-form-preview__ft">
                    <a class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:" @tap="back2List()">返回列表</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import utils from 'utils'

    export default {
        data() {
            return {
            }
        },
        computed: {
            detail() {
                return this.$route.query
            },
            startTime() {
                return decodeURIComponent(this.detail["start"])
            },
            endTime() {
                return decodeURIComponent(this.detail["end"])
            }
        },
        methods: {
            back2List() {
                this.$router.push({
                    path: '/stock/stop/list',
                    query: {
                        tab: this.$route.query['back'],
                        page: 1
                    }
                })
            }
        }
    }
</script>