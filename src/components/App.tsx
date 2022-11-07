import React, { useState } from "react";
import { TasksContext } from "../context/TasksContext";
import Title from "../style/Title.style";
import Wrapper from "../style/Wrapper.style";
import { MyList } from "./MyList";
import { Item } from "./MyListItem";

function App() {
  const [tasks, setTasks] = useState<Item[]>([
    { id: 1, name: "do laundry" },
    { id: 2, name: "shop for underwear" },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <Wrapper className="App">
        <Title>Very important to do list</Title>
        <MyList />
      </Wrapper>
    </TasksContext.Provider>
  );
}

export default App;
