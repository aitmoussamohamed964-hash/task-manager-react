function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Statut : {task.status}</p>

      <p>Date limite : {task.date}</p>
    </div>
  );
}

export default TaskCard;