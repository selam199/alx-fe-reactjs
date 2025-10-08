import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    await userEvent.type(input, "Test new todo");
    await userEvent.click(button);

    const newTodo = await screen.findByText("Test new todo");
    expect(newTodo).toBeInTheDocument();
  });

  test("toggles a todo", async () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    await userEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const todo = screen.getByText("Build Todo App");
    const deleteButton = todo.nextSibling;

    await userEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
