"use client";
import { useState, useEffect } from "react";
import { Form, Button, ListGroup, Container, Row, Col, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import "bootstrap/dist/css/bootstrap.min.css";

import { useCopilotAction } from "@copilotkit/react-core";

const ITodo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Track mounting

  useEffect(() => {
    setIsMounted(true); // Set to true when component mounts
  }, []);

  useCopilotAction({
    name: "addTask",
    description: "Adds a new task to the to-do list",
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The description of the task",
        required: true,
      },
      {
        name: "dueDate",
        type: "string",
        description: "The due date of the task in YYYY-MM-DD HH:mm:ss format",
        required: true,
      },
    ],
    handler: ({ text, dueDate }) => {
      console.log("Adding task from Copilot:", text, dueDate);
      const newTask = {
        id: Date.now(),
        text,
        date: moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss"),
        dueDate,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    },
  });

  if (!isMounted) return null; // Prevent SSR mismatches

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center mb-4">ZenTask App</h1>
          {showAlert && (
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              You have overdue tasks!
            </Alert>
          )}
          {/* Form to add tasks */}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim() && dueDate) {
                const newTask = {
                  id: Date.now(),
                  text: input,
                  date: moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss"),
                  dueDate: moment(dueDate).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss"),
                  completed: false,
                };
                setTasks((prevTasks) => [...prevTasks, newTask]);
                setInput("");
                setDueDate(null);
              }
            }}
            className="mb-3"
          >
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
                className="me-2"
              />
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd/MM/yyyy h:mm aa"
                className="form-control me-2"
                placeholderText="Select due date & time"
              />
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form.Group>
          </Form>

          {/* Task List */}
          <ListGroup>
            {tasks.map((task) => (
              <ListGroup.Item
                key={task.id}
                className={`d-flex justify-content-between align-items-center ${
                  task.completed ? "bg-success text-white" : ""
                }`}
              >
                <div>
                  <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    {task.text}
                  </div>
                  <small className="text-muted">Added: {task.date} | Due: {task.dueDate}</small>
                </div>
                <div className="d-flex">
                  <Button
                    variant={task.completed ? "secondary" : "success"}
                    size="sm"
                    onClick={() =>
                      setTasks((prev) =>
                        prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
                      )
                    }
                    className="me-2"
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => setTasks((prev) => prev.filter((t) => t.id !== task.id))}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ITodo;
