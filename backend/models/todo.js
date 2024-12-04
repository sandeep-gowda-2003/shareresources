import mongoose from "mongoose";
const { Schema } = mongoose;

const task_schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const todolist = mongoose.model("todolist", task_schema);
