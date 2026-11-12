import { useState } from "react";

function TaskForm({ ajouterTache }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateLimite, setDateLimite] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const nouvelleTache = {
      id: Date.now(),
      titre: titre,
      description: description,
      dateLimite: dateLimite,
      statut: "En attente",
    };

    ajouterTache(nouvelleTache);

    setTitre("");
    setDescription("");
    setDateLimite("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une tâche</h2>

      <label htmlFor="titre">Titre :</label>
      <input
        id="titre"
        type="text"
        value={titre}
        onChange={(event) => setTitre(event.target.value)}
        required
      />

      <label htmlFor="description">Description :</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <label htmlFor="dateLimite">Date limite :</label>
      <input
        id="dateLimite"
        type="date"
        value={dateLimite}
        onChange={(event) => setDateLimite(event.target.value)}
        required
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;