import { Button, ButtonGroup, Divider } from "@blueprintjs/core";
import styles from "./TodoItem.module.css";
import { useDeleteTodoMutation, useCompleteTodoMutation } from "../store";
import { Todo } from "../types";

function TodoItem({ todo }: { todo: Todo }) {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useCompleteTodoMutation();
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleCompleted = () => {
    updateTodo(todo);
  };
  return (
    <div className={styles.container}>
      <div className={styles["todo-item"]}>
        <p className={`bp5-text-large bp5-running-text ${styles["todo-text"]}`}>
          <strong className={`${todo.completed ? styles["completed"] : ""}`}>
            {todo.text}
          </strong>
        </p>
        <ButtonGroup minimal={true}>
          <Button
            icon={todo.completed ? "undo" : "tick"}
            onClick={() => handleCompleted()}>
            {todo.completed ? "Undo" : "Mark as complete"}
          </Button>
          <Button icon="trash" intent="danger" onClick={() => handleDelete()}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
      <Divider className={styles.divider} />
    </div>
  );
}

export default TodoItem;
