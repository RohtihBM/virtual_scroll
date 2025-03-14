import "./styles.css";
import List from "./Components/List";
export default function App() {
  const LIST = [...Array(100000).keys()].map((n) => n + 1);

  return <List list={LIST} width={300} height={500} itemHeight={30}></List>;
}
