<template>
    <div class="list-todos">
        <a class="list-todo activeLiseClass list" :key='index' v-for="(item, index) in items">
            <span class="icon-lock"></span>
            <span class="count-list">{{item.count}}</span>{{item.title}}
        </a>
        <a class="link-list-new">
            <span class="icon-plus"></span>new
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Monday',
                    count: 1,
                    locked: true
                },
                {
                    title: 'Tuesday',
                    count: 3,
                    locked: true
                },
                {
                    title: 'Wednesday',
                    count: 6,
                    locked: false
                }
            ]
        };
    }
};
</script>
<style lang="less">
@import '../common/styles/menu.less';
</style>


