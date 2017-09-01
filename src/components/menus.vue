<template>
    <div class="list-todos">
        <a @click='goList(item.id)' :class="{'active': item.id === todoId}" class="list-todo activeLiseClass list" :key='index' v-for="(item, index) in items">
            <span class="icon-lock"></span>
            <span class="count-list">{{item.count}}</span>{{item.title}}
        </a>
        <a class="link-list-new" @click="addTodoList">
            <span class="icon-plus"></span>new
        </a>
    </div>
</template>

<script>
import {
    getTodoList,
    addTodo
} from '../api/api';
export default {
    data() {
        return {
            items: [],
            todoId: ''
        };
    },
    mounted() {
        getTodoList({}).then(res => {
            const TODOS = res.data.todos;
            this.items = TODOS;
            this.todoId = TODOS[0].id;
        });
    },
    methods: {
        goList(id) {
            this.todoId = id;
        },
        addTodoList() {
            addTodo({}).then(data => {
                getTodoList({}).then(res => {
                    const TODOS = res.data.todos;
                    this.todoId = TODOS[TODOS.length - 1].id;
                    this.items = TODOS;
                });
            });
        }
    }
};
</script>
<style lang="less">
@import '../common/styles/menu.less';
</style>


