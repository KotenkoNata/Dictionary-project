import './App.css';
import Dictionary from './Dictionary/Dictionary';

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <main>
          <Dictionary defaultKeyworld={"sunset"}/>
        </main>
      </div>
    </div>
  );
}

export default App;
