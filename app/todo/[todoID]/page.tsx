import axios from "axios";

async function page({ params }: any) {
  const { todoID } = await params;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${todoID}`,
  );

  interface TodoType {
    id: number;
    title: string;
    completed: boolean;
  }

  const data = response.data as TodoType;

  return (
    <>
      <div>Todo {todoID}: </div>
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.completed ? "Completed" : "Not Completed"}</div>
    </>
  );
}

export default page;
