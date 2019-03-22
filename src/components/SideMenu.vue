<template>
    <nav class="left-side">
        <el-menu class="el-menu-vertical-demo" background-color="#222d32"
                 @select="handleSelect" text-color="#b8c7ce" active-text-color="#ffffff"
                 :default-active="defaultActive" :unique-opened="true" :router="true">
            <el-submenu
                    :index="menu.url"
                    :key="menu.menuId"
                    v-for="menu in menuList">
                <template slot="title">
                    <i :class="[menu.icon]"></i>
                    {{ menu.name }}
                </template>
                <el-menu-item
                        :index="item.url"
                        :key="item.menuId"
                        v-for="item in menu.list">
                    <i :class="[item.icon]"></i>
                    {{ item.name }}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </nav>
</template>
<script>

export default {

    data () {
        return {
            result: [],
            menuList: [],
            defaultActive: window.location.pathname,
            defaultOpeneds: []
        };
    },
    methods: {
        /**
         * 查询菜单
         * @returns {Promise.<void>}
         */
        async queryPermisstion () {
            let result = await this.$request('menu');
            this.menuList = result.map(item => {
                if (item.type === 0 && item.parentId !== 0) {
                    return this.createMenuItem(item);
                }
            }).filter((item) => {
                return item;
            });

            result.forEach(item => {
                this.menuList.forEach(menu => {
                    if (item.type === 1 && item.parentId === menu.menuId) {
                        menu.list.push(this.createMenuItem(item));
                    }
                });
            });
            this.sortMenuList(this.menuList);
        },

        /**
             * 生成规定菜单对象
             * @param item
             * @returns {{menuId: (*|number), name, url, orderNum: (*|number), type, parentId, list: Array}}
             */
        createMenuItem (item) {
            return {
                menuId: item.menuId,
                name: item.name,
                url: item.url || item.name,
                orderNum: item.orderNum,
                type: item.type,
                parentId: item.parentId,
                icon: item.icon,
                list: []
            };
        },

        /**
             * 对菜单进行排序
             * @param menuList
             */
        sortMenuList (menuList) {
            if (menuList.length !== 0) {
                menuList.sort((a, b) => {
                    return a.orderNum - b.orderNum;
                });
            }
            if (menuList.hasOwnProperty('list') && menuList.list.length !== 0) {
                this.sortMenuList(menuList.list);
            }
        },

        /**
             * 点击菜单
             * @param index
             * @param indexPath
             */
        handleSelect (index, indexPath) {
            this.defaultActive = index;
        }
    },
    created () {
        this.queryPermisstion();
        this.$request('queryProductDetailById', { id: '1108985849160753167' });
    }

};
</script>
<style scoped>
    .el-menu {
        border-right: none;
    }
</style>
