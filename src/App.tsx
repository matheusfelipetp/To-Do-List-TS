import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { List } from './components/List';
import { Modal } from './components/Modal';
import { ITask } from './interfaces/Task';
import styles from './App.module.css';

export const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const handleDelete = (uuid: string) => {
    setTaskList(taskList.filter((task) => task.uuid !== uuid));
  };

  const handleModal = (display: boolean) => {
    const modal = document.querySelector('#modal');

    if (display) {
      modal?.classList.remove('hide');
    } else {
      modal?.classList.add('hide');
    }
  };

  const handleEditTask = (task: ITask): void => {
    handleModal(true);
    setTaskToUpdate(task);
  };

  const handleUpdate = (uuid: string, title: string, difficulty: number) => {
    const updatedTask: ITask = {
      uuid,
      title,
      difficulty,
    };

    const updatedItems = taskList.map((task) =>
      task.uuid === updatedTask.uuid ? updatedTask : task,
    );

    setTaskList(updatedItems);
    handleModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <Form
            btnText="Editar Tarefa"
            taskList={taskList}
            taskToUpdate={taskToUpdate}
            handleUpdate={handleUpdate}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Form
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <List
            taskList={taskList}
            handleDelete={handleDelete}
            handleEditTask={handleEditTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
