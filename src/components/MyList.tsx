import { useState, useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import ListWrapper from "../style/ListWrapper.style";
import { MyListItem, Item } from "./MyListItem";
import { FaPlusCircle, FaEraser, FaPaperPlane } from "react-icons/fa";
import AddWrapper from "../style/AddWrapper.style";
import FormWrapper from "../style/FormWrapper.style";
import FormInput from "../style/FormInput.style";
import FormSubmitButton from "../style/FormSubmitButton.style";

export function MyList() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [item, setItem] = useState<Item>({
    id: 0,
    name: "",
  });
  const [addTask, setAddTask] = useState(false);

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const maxTaskId = Math.max(...tasks.map((o) => o.id));
    item.id = maxTaskId + 1;
    tasks.push(item);
    setTasks([...tasks]);

    console.log("inserito nuovo task: " + item.id);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value as keyof Item;
    const name = event.target.name;

    setItem((item) => {
      return {
        ...item,
        [name]: value,
      };
    });
  }

  function handleTaskReset() {
    setTasks([]);
  }

  function handleAddNewTask() {
    setAddTask((current) => !current);
  }

  return (
    <section style={{ width: "100%" }}>
      <ListWrapper>
        {tasks.map((t) => (
          <MyListItem key={t.id} listItem={t} />
        ))}
      </ListWrapper>
      <AddWrapper onClick={handleAddNewTask}>
        <FaPlusCircle size={40} style={{ margin: 8 }} />
        {tasks.length > 0 && (
          <FaEraser
            onClick={handleTaskReset}
            size={40}
            style={{ margin: 8 }}
          ></FaEraser>
        )}
      </AddWrapper>
      {addTask && (
        <FormWrapper onSubmit={handleAddTask}>
          <FormInput
            name="name"
            value={item.name}
            onChange={handleInputChange}
          />
          <FormSubmitButton>
            {" "}
            <FaPaperPlane />{" "}
          </FormSubmitButton>
        </FormWrapper>
      )}
    </section>
  );
}
