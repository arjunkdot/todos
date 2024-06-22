import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, TODOS_ROUTE } from '../../constants';
import type { Todo } from '../../types';
type TodoResponse = Todo[]

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),
    endpoints: (builder) => ({
        fetchTodos: builder.query<TodoResponse, void>({
            query: () => {
                return {
                    url: `${TODOS_ROUTE}`,
                    method: 'GET',
                }
            },
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (todo) => {
                return {
                    url: `${TODOS_ROUTE}`,
                    method: 'POST',
                    body: {
                        id: todo.id,
                        text: todo.text,
                        date: todo.date,
                        completed: false
                    }
                }
            },
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: (id) => {
                return {
                    url: `${TODOS_ROUTE}/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Todos']
        }),
        completeTodo: builder.mutation({
            query: (todo) => {
                return {
                    url: `${TODOS_ROUTE}/${todo.id}`,
                    method: 'PUT',
                    body: {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            },
            invalidatesTags: ['Todos']
        })
    })
})



export const { useFetchTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useCompleteTodoMutation } = todosApi
