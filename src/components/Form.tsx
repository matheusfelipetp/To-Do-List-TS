import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './Form.module.css';
import { ITask } from '../interfaces/Task';
import { v4 } from 'uuid';

interface IForm {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  taskToUpdate?: ITask | null;
  handleUpdate?(uuid: string, title: string, difficulty: number): void;
}

export const Form = ({
  btnText,
  taskList,
  setTaskList,
  taskToUpdate,
  handleUpdate,
}: IForm) => {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (taskToUpdate) {
      setId(taskToUpdate.uuid);
      setTitle(taskToUpdate.title);
      setDifficulty(taskToUpdate.difficulty);
    }
  }, [taskToUpdate]);

  const handleTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const uuid = v4();
      const newTask: ITask = {
        uuid,
        title,
        difficulty,
      };

      setTaskList!([...taskList, newTask]);
      setTitle('');
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={handleTask} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          value={title}
          required
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          value={difficulty}
          required
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};
