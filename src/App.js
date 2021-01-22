import Header from './Components/Header';
import Container from "./Components/Container";
import CardContainer from "./Components/CardContainer";
import Card from './Components/Card';

function App() {
  return (
    <div className="bg-gray-50">
      <Container>
          <Header/>
      </Container>
      <CardContainer>
              <Card/>
              <Card/>
              <Card/>
        </CardContainer>
    </div>
  );
}

export default App;
