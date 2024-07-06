import "./App.css";
import CardFilp from "./components/CardFilp";
import NumberInput from "./components/NumberInput";

function App() {
  return (
    <main className="flex flex-col justify-around items-center w-full h-svh">
      <div className="flex flex-col items-start gap-3 text-md">
        <h2 className="bg-zinc-300 p-3 rounded-lg font-semibold">문제 2</h2>
        <NumberInput />
      </div>

      <div className="flex flex-col items-start gap-3 text-md">
        <h2 className="bg-zinc-300 p-3 rounded-lg font-semibold">문제 3</h2>
        <CardFilp />
      </div>
    </main>
  );
}

export default App;
