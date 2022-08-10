import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("HelloWorld test heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /HelloWorld Test/i
    );
  });
  test("a HelloWorld project heading", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Update Heading" });

    userEvent.click(button);

    expect(screen.getByRole("heading")).toHaveTextContent(
      /A HelloWorld Project/i
    );
  });
});

//userEvent is the React Testing Library's package containing several methods for simulating users' interaction with an app
//npm start start the project
/** 1. Using jest-dom's toHaveTextContent() method:
  expect(screen.getByRole("heading")).toHaveTextContent(
    /HelloWorld test/i
  );

  // 2. Using the heading's textContent property and Jest's toMatch() method:
  expect(screen.getByRole("heading").textContent).toMatch(/HelloWorld test/i);

  // 3. Using React Testing Library's name option and jest-dom's toBeInTheDocument() method
  expect(
    screen.getByRole("heading", { name: /HelloWorld test/i })
  ).toBeInTheDocument(); **/

/**
 * test step 
 * We imported the packages needed to write our test case.
  We wrote a test case specifying that we expect our <App /> component to render a heading element with a "HelloWorld heading test" text.
  test() is one of Jest's global methods. We use it to run a test case. The method accepts three arguments:
    The name of the test ("HelloWorld test heading")
    A function containing the expectations you wish to test 
    An optional timeout argument
  render() is one of the React Testing Library APIs. We use it to render the component we wish to test.
  expect() is a Jest method that lets you test the output of your code.
  screen is a React Testing Library's object containing numerous methods for finding elements on a page.
  getByRole() is one of the React Testing Library's query methods for finding elements on a page.
  toHaveTextContent() is one of jest-dom's custom matchers that you can use to confirm the presence of a text content in a specific node.
/ /HelloWorld test/i is a regular expression syntax that we used to specify a case-insensitive search for HelloWorld test.
 * **/
