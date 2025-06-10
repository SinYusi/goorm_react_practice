import "./App.css";
import Mandoo from "./Mandoo";

function App() {
  return (
    <>
      // 만두 컴포넌트 : borderColor = pink, imgWidth = 300
      <Mandoo borderColor="pink" imgWidth="300px" />
      // 만두 컴포넌트 : borderColor = blue, imgWidth = 100
	    <Mandoo borderColor="blue" imgWidth="100px" />
    </>
  );
}

export default App;