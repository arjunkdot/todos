import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { useState } from "react";
import { useAddTodoMutation } from "../store";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
function Header() {
  const [task, setTask] = useState("");
  const [addTask] = useAddTodoMutation();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      const taskToAdd = {
        id: uuidv4(),
        text: task,
        date: format(new Date(), "yyyy-MM-dd"),
        completed: false,
      };
      addTask(taskToAdd);
      setTask("");
    }
  };
  return (
    <section className="header">
      <h2 className="bp5-heading">Todos</h2>
      <p className="bp5-text-muted bp5-running-text">
        A simple todo app demonstrating RTK Query.
      </p>
      <form className="bp5-form-group" onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <InputGroup
            id="text-input"
            placeholder="Add an activity, event or a task."
            value={task}
            onChange={handleInput}
          />
        </FormGroup>
        <Button type="submit" icon="plus" text="Add Todo" intent="primary" />
      </form>
    </section>
  );
}

export default Header;
