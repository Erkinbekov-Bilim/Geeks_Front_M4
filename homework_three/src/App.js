import './App.css';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <TodosPage/>
    </div>
  );
}

export default App;
