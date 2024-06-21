import { Button, ButtonGroup, Divider } from "@blueprintjs/core";
import styles from "./TodoItem.module.css";
function TodoItem() {
  return (
    <div className={styles.container}>
      <div className={styles["todo-item"]}>
        <p className={`bp5-text-large bp5-running-text ${styles["todo-text"]}`}>
          <strong>This is a sample task</strong>
        </p>
        <ButtonGroup minimal={true}>
          <Button icon="edit">Edit</Button>
          <Button icon="trash" intent="danger">
            Delete
          </Button>
        </ButtonGroup>
      </div>
      <Divider className={styles.divider} />
    </div>
  );
}

export default TodoItem;
