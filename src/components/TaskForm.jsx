import { useState } from "react";

function TaskForm({ onAddTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date === ""
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      status: "En attente",
      date: date
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Ajouter une tâche</h2>

      <label>Titre</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Date limite</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Ajouter</button>

    </form>
  );
}

export default TaskForm;
