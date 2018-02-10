<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
        <div class="container">
            <router-view></router-view>
        </div>
        <!--<navbar></navbar>-->
        <site-footer></site-footer>
    </div>
</template>

<script>
    const services = require('services');
    import navbar from '@/components/common/navbar'
    import siteFooter from '@/components/common/site-footer'

    export default {
        name: 'app',
        components: {
            navbar,
            siteFooter
        }
    }
</script>