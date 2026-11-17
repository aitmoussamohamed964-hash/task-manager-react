import TaskCard from "./TaskCard";

function TaskList({ tasks }) {

  if (tasks.length === 0) {
    return <p>Aucune tâche pour le moment.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;                                                                                                    

