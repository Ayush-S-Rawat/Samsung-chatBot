import ChatSpace from "./components/chatSpace/chatSpace.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Header from "./components/header/header.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ChatSpace />
      <Dashboard />
    </div>
  );
}

export default App;
