"use client";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutZenTask = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="d-flex justify-content-center mt-5"
    >
      <Card style={{ width: "50%", padding: "20px", borderRadius: "12px", backgroundColor: "#f4f4f4" }}>
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Welcome to ZenTask 🧘‍♂️📌
          </Card.Title>
          <Card.Text className="text-center mt-3" style={{ fontSize: "1.2rem", color: "#555" }}>
            ZenTask is more than just a to-do list—it's a mindful approach to productivity.
            Designed to keep you organized while maintaining a sense of calm, ZenTask helps
            you track tasks, set deadlines, and stay focused without feeling overwhelmed.
          </Card.Text>
          <Card.Text className="text-center mt-2" style={{ fontSize: "1rem", color: "#777" }}>
            ✨ Effortless task management <br />
            ⏳ Smart scheduling with due dates <br />
            📊 Minimalist and intuitive interface <br />
            🌱 A productivity tool designed with mindfulness in mind
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default AboutZenTask;
