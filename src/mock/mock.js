import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import { Todos } from './data/todoList';

export default {
    start() {
        let mock = new MockAdapter(axios);

        mock.onGet('/todo/list').reply(conifg => {
            let mockTodo = Todos.map(todo => {
                return {
                    id: todo.id,
                    title: todo.title,
                    count: todo.record.filter(data => {
                        return data.checked === false;
                    }).length,
                    locked: todo.locked,
                    isDelete: todo.isDelete
                };
            }).filter(todo => {
                return todo.isDelete !== true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        200,
                        {
                            todos: mockTodo
                        }
                    ]);
                }, 200);
            });
        });

        mock.onPost('/todo/addTodo').reply(config => {
            Todos.push({
                id: Mock.Random.guid(),
                title: 'newlist',
                isDelete: false,
                locked: false,
                record: []
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            });
        });
    }
};
