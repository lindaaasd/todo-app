import React, { createContext, useState } from "react";
import { Item } from "../components/MyListItem";

type TasksProviderProps = {
  children: React.ReactNode;
};

type TasksContextType = {
  tasks: Item[];
  setTasks: (newValue: Item[]) => void;
};

export const emptyContext = {
  tasks: [],
  setTasks: (_: Item[]): void => {},
};

export const TasksContext = createContext<TasksContextType>(emptyContext);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Item[]>([
    { id: 1, name: "do laundry" },
    { id: 2, name: "shop for underwear" },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
