import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { todosApi } from "./apis/todos";
const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
})

setupListeners(store.dispatch)
export default store
export { useFetchTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useCompleteTodoMutation } from './apis/todos'