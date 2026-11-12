import { useState } from "react";
import TaskForm from "./components/TaskForm";
function App() {
  const [taches, setTaches] = useState([]);

  function ajouterTache(nouvelleTache) {
    setTaches((anciennesTaches) => [
      ...anciennesTaches,
      nouvelleTache,
    ]);
  }

  return (
    <div>
      <TaskForm ajouterTache={ajouterTache} />
      <p>Nombre de tâches : {taches.length}</p>
    </div>
  );
}

export default App;