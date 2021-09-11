import Task from "./Task";

const Tasks = ({ tasks, dtask, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task onToggle={onToggle} key={task.id} task={task} dtask={dtask} />
      ))}
    </div>
  );
};

export default Tasks;
