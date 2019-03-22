<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
<script>
import { mapGetters } from 'vuex';
import HeaderBar from '@/components/HeaderBar.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
    computed: {
        ...mapGetters([
            'loading'
        ])
    },
    components: {
        HeaderBar,
        SideMenu
    }
};
</script>
