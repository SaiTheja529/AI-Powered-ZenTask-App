"use client"
import Image from "next/image";
import ITodo from "@/components/ITodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useState } from "react";
import { useCopilotAction } from "@copilotkit/react-core";

export default function Home() {
  const [todos, setTodos] = useState([]);
 
  // Define Copilot action
  useCopilotAction({
    name: "addTodoItem",
    description: "Add a new todo item to the list",
    parameters: [
      {
        name: "todoText",
        type: "string",
        description: "The text of the todo item to add",
        required: true,
      },
    ],
    handler: async ({ todoText }) => {
      setTodos([...todos, todoText]);
    },
  });
  
  return (
    <div>
      <CopilotSidebar
        defaultOpen={true}
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Sidebar Assistant",
          initial: "How can I help you today?",
        }}
      >
        <div className="container">
          <ITodo/>
        </div>

      </CopilotSidebar>

    </div>
  );
}
