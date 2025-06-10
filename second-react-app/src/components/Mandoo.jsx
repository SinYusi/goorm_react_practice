import MandooImg from "./MandooImg";

const mandooTodoLists = {
  todos: ["간식 먹기", "화분 돌 다 꺼내기", "공유기 위에서 자기"],
};

export default function Mandoo() {
  return (
    <main style={{ padding: "20px" }}>
      <h3>Mandoo Todo</h3>
      <MandooImg width="100px" />
      <ul>
        {mandooTodoLists.todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </main>
  )
}