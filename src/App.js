import './App.scss';
// Components
import { UIHeader } from "./components/UIHeader";
import { UIMain } from "./components/UIMain";

function App() {
  return (
    <div>
      <div className="app">
        <header className="app-header">
          <UIHeader />
        </header>

        <main className="app-main">
          <UIMain />
        </main>
      </div>
    </div>
  );
}

export default App;
