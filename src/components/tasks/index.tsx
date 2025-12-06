import React from 'react';
import TaskItem from './taskItem';
import { TaskItemType } from '../../types/tasks';

type TasksListProps = {
  taskList: TaskItemType[];
};

const TasksList: React.FC<TasksListProps> = ({ taskList }) => {
  if (taskList.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>هیچ تسکی یافت نشد.</p>
      </div>
    );
  }

  return (
    <>
      {taskList.map(task => (
        <TaskItem
          key={task.taskId}
          taskId={task.taskId}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          createdAt={task.createdAt}
          priority={task.priority}
          status={task.status}
          category={task.category}
        />
      ))}
    </>
  );
};

export default React.memo(TasksList);
