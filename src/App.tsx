import { TodosProvider } from './context/TodosContext';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <TodosProvider>
     <div className="container">
        <div className="content">
          <Header />
          <TodoList />
          <Footer />
        </div>
      </div>
    </TodosProvider>
  );
}

export default App;
