import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import ListItemButton from "../style/ListItemButton.style";
import { FaTrash } from "react-icons/fa";

type MyListItemState = {
  listItem: Item;
};

export type Item = {
  id: number;
  name: string;
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "50%",
};

export function MyListItem({ listItem }: MyListItemState) {
  const { tasks, setTasks } = useContext(TasksContext);

  function handleDeleteTask(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id) ?? -1;
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
      setTasks([...tasks]);
    }
    return console.log("ho cancellato task: " + id);
  }

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {listItem.id > 0 && (
        <li key={listItem.id} style={listItemStyle}>
          <h2> {listItem.name}</h2>
          <ListItemButton onClick={() => handleDeleteTask(listItem.id)}>
            <FaTrash size={30} />
          </ListItemButton>
        </li>
      )}
    </section>
  );
}
