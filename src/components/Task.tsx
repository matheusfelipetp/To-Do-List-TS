import { BsTrash, BsPencil } from 'react-icons/bs';
import { ITask } from '../interfaces/Task';
import styles from './Task.module.css';

interface ITaskComponent {
  task: ITask;
  handleDelete(uuid: string): void;
  handleEditTask(task: ITask): void;
}

export const Task = ({
  task,
  handleDelete,
  handleEditTask,
}: ITaskComponent) => {
  return (
    <li className={styles.task}>
      <div className={styles.details}>
        <h4>{task.title}</h4>
        <p>Dificuldade: {task.difficulty}</p>
      </div>
      <div className={styles.actions}>
        <BsPencil
          style={{
            marginBottom: '.5em',
            fontSize: '1.2em',
            cursor: 'pointer',
            backgroundColor: '#282c34',
            color: '#fff',
            padding: '.4em',
            borderRadius: '4px',
          }}
          onClick={() => handleEditTask(task)}
        />
        <BsTrash
          style={{
            marginBottom: '.5em',
            fontSize: '1.2em',
            cursor: 'pointer',
            backgroundColor: '#282c34',
            color: '#fff',
            padding: '.4em',
            borderRadius: '4px',
          }}
          onClick={() => handleDelete(task.uuid)}
        />
      </div>
    </li>
  );
};
