import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import Container from "./components/Container/Container";
import AddTransaction from "./components/AddTransaction/AddTransaction";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Sidebar />
        <AddTransaction />
      </Container>
    </>
  );
}

export default App;
