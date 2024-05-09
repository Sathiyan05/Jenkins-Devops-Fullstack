import React from "react";
import { render, screen } from "@testing-library/react";
import Student from "./Components/Student";
import Mark from "./Components/Mark";
import NavBar from "./Components/NavBar";

describe("Student component rendering", () => {
  test("renders search input", () => {
    render(<Student />);
    expect(screen.getByPlaceholderText("Search Student")).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(<Student />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("render the add Student text", () => {
    render(<Student />);
    expect(screen.getByText("Add New Student")).toBeInTheDocument();
  });

  test("renders student table", () => {
    render(<Student />);
    expect(screen.getByText("Student Id")).toBeInTheDocument();
    expect(screen.getByText("Student Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Student Department Name")).toBeInTheDocument();
  });

  test("renders student name input", () => {
    render(<Student />);
    expect(
      screen.getByPlaceholderText("Enter Student Name")
    ).toBeInTheDocument();
  });

  test("renders student Email input", () => {
    render(<Student />);
    expect(screen.getByPlaceholderText("Enter Email")).toBeInTheDocument();
  });

  test("renders student Phone Number input", () => {
    render(<Student />);
    expect(
      screen.getByPlaceholderText("Enter Phone Number")
    ).toBeInTheDocument();
  });

  test("renders student Location input", () => {
    render(<Student />);
    expect(screen.getByPlaceholderText("Enter Location")).toBeInTheDocument();
  });

  test("renders student Department selector input", () => {
    render(<Student />);
    expect(
      screen.getByDisplayValue("Select Department...")
    ).toBeInTheDocument();
  });

  test("renders Mark table", () => {
    render(<Mark />);
    expect(screen.getByText("Student")).toBeInTheDocument();
    expect(screen.getByText("Subject Id")).toBeInTheDocument();
    expect(screen.getByText("Subject Name")).toBeInTheDocument();
    expect(screen.getByText("Subject Semester")).toBeInTheDocument();
    expect(screen.getByText("Mark")).toBeInTheDocument();
  });

  test("renders search input", () => {
    render(<Mark />);
    expect(screen.getByPlaceholderText("Search Student")).toBeInTheDocument();
  });

  test("render the add Mark text", () => {
    render(<Mark />);
    expect(screen.getByText("Add Mark")).toBeInTheDocument();
  });

  test("renders Mark input", () => {
    render(<Mark />);
    expect(screen.getByPlaceholderText("Enter Mark")).toBeInTheDocument();
  });

  test("renders Mark Student selector input", () => {
    render(<Mark />);
    expect(screen.getByDisplayValue("Select Student...")).toBeInTheDocument();
  });

  test("renders Mark Subject selector input", () => {
    render(<Mark />);
    expect(screen.getByDisplayValue("Select Subject...")).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(<Mark />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("render navbar header text", () => {
    render(<NavBar />);
    expect(screen.getByText("Database Management System")).toBeInTheDocument();
  });

  test("render navbar Home text link", () => {
    render(<NavBar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("render navbar Dropdown link", () => {
    render(<NavBar />);
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
});
