<template>
    <div class="list-item editingClass editing">
        <label class="checkbox">
            <input type="checkbox" v-model="item.checked">
            <span class="checkbox-custom"></span>
        </label>
        <input type="text" v-model="item.text" placeholder="write some words...">
        <a class="delete-item">
            <span class="icon-trash"></span>
        </a>
    </div>
</template>

<script>
export default {
    props: ['item']
};
</script>

<style lang="less">
@import '../common/styles/list-items.less';
</style>


