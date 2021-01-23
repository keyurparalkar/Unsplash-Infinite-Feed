import { useEffect } from 'react';
import tw from 'twin.macro';

import './tailwind.css';
import Card from './Components/Card';
import CardContainer from "./Components/CardContainer";
import Header from './Components/Header';

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
  }, [])

  return (
    <div tw="font-sans antialiased">
      <Header/>
      <CardContainer>
              <Card/>
              <Card/>
              <Card/>
        </CardContainer>
    </div>
  );
}

export default App;
