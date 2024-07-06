import "./App.css";
import CardFilp from "./components/CardFilp";
import NumberInput from "./components/NumberInput";

function App() {
  return (
    <main className="flex flex-col justify-around items-center h-svh">
      <div className="flex flex-col items-center gap-3 text-xl">
        <h2>문제 2</h2>
        <NumberInput />
      </div>

      <div className="flex flex-col items-center gap-3 text-xl">
        <h2>문제 3</h2>
        <CardFilp />
      </div>
    </main>
  );
}

export default App;
