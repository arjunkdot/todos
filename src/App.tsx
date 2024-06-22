import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import { useFetchTodosQuery } from "./store/";
import { Todo } from "./types";
function App() {
  const { data, error, isLoading } = useFetchTodosQuery();
  return (
    <>
      <main className="container panel">
        <Header />
        {error ? <p>error</p> : null}
        {isLoading ? <p className="bp5-skeleton">loading</p> : null}
        {data &&
          data.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
      </main>
      <footer className="container footer">
        <p className="bp5-text-muted bp5-running-text">
          UI powered by{" "}
          <a href="https://blueprintjs.com/" target="_blank">
            Blueprint
          </a>{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
