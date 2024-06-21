import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

function Header() {
  return (
    <section className="header">
      <h2 className="bp5-heading">Todos</h2>
      <p className="bp5-text-muted bp5-running-text">
        A simple app to manage todos.
      </p>
      <form className="bp5-form-group">
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <InputGroup
            id="text-input"
            placeholder="Add an activity, event or a task."
          />
        </FormGroup>
        <Button icon="plus" text="Add Todo" intent="primary" />
      </form>
    </section>
  );
}

export default Header;
