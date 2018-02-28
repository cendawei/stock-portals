<template>
    <div class="weui-footer mt10 mb10">
        <p class="weui-footer__text">Copyright © {{curYear}} cdroom.top</p>
    </div>
</template>

<script>
    export default {
        computed: {
            'curYear'() {
                return new Date().getFullYear()
            }
        }
    }
</script>