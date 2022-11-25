import { ITask } from '../interfaces/Task';
import { Task } from './Task';

interface IList {
  taskList: ITask[];
  handleDelete(uuid: string): void;
  handleEditTask(task: ITask): void;
}

export const List = ({ taskList, handleDelete, handleEditTask }: IList) => {
  return (
    <ul>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <Task
            key={task.uuid}
            task={task}
            handleDelete={handleDelete}
            handleEditTask={handleEditTask}
          />
        ))
      ) : (
        <p>Não há tarefas adicionadas!</p>
      )}
    </ul>
  );
};
