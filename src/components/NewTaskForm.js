import React from "react";
import React, { useState } from "react";

function NewTaskForm() {
function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState(categories[1])
  const handleSubmit = (event) =>{
    event.preventDefault()
    const newTask = {
      text: text,
      category: category
    }
    onTaskFormSubmit(newTask)
    setText("")
    setCategory(categories[1])
    
  }
  return (
    <form className="new-task-form">
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.filter((cat) => cat !== "All").map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />

  
export default NewTaskForm;  