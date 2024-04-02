import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className=" bg-fe-lg w-screen h-screen flex items-center justify-center">
      <Card
        title={"Improve your front-end skills by building projects"}
        description={
          "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        }
      />
    </div>
  );
}

export default App;
