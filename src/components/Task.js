import { FaBeer } from "react-icons/fa";
//import Tasks from './Tasks'

const Task = ({ task, dtask, onToggle }) => {
  return (
    <div className={task.reminder ? 'remi' : ''} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.txt} <FaBeer onClick={() => dtask(task.id)} className="fafa" />
      </h3>
      <p>{task.id}</p>
    </div>
  );
};

export default Task;
