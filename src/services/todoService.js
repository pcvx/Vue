import { get, post } from './baseService';

export const getTodo = (todoId) => get(`/posts/${todoId}`);

export const getTodos = (limit = 5) => get('/posts', { _limit: limit });

export const addTodo = async (todo) => {
  const todoItem = await post('/posts', todo);
  todoItem.id = todo.id; // Костыль из-за особенности работы API

  return todoItem;
};
