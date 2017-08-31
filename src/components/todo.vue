<template>
    <div class="page lists-show">
        <nav>
            <div class="nav-group">
                <a class="nav-item">
                    <span class="icon-list-unordered"></span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper">{{todo.title}}</span>
                <span class="count-list">{{todo.count}}</span>
            </h1>
            <div class="nav-group right">
                <div class="options-web">
                    <a class="nav-item">
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" v-else></span>
                    </a>
                    <a class="nav-item">
                        <span class="icon-trash"></span>
                    </a>
                </div>
            </div>
            <div class="form todo-new input-symbol">
                <input type="text" v-model="text" placeholder="input text" @keyup.enter='onAdd' :disabled='todo.locked' />
                <span class="icon-add"></span>
            </div>
        </nav>
        <div class="content-scrollable list-items">
            <div :key='index' v-for="(item, index) in items">
                <item :item='item'></item>
            </div>
        </div>
    </div>
</template>
<script>
import item from './item';
export default {
    components: {
        item
    },
    data() {
        return {
            todo: {
                title: 'Monday',
                count: 12,
                locked: false
            },
            items: [
                {
                    checked: false,
                    text: 'new day',
                    isDelete: false
                },
                {
                    checked: false,
                    text: 'new day',
                    isDelete: false
                },
                {
                    checked: false,
                    text: 'new day',
                    isDelete: false
                }
            ],
            text: ''
        };
    },
    methods: {
        onAdd() {
            this.items.push({
                checked: false,
                text: this.text,
                isDelete: false
            });
            this.text = '';
        }
    }
};
</script>

<style lang="less">
@import '../common/styles/nav.less';
@import '../common/styles/form.less';
@import '../common/styles/todo.less';
</style>


