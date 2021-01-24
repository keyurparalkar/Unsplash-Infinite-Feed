import { useEffect } from 'react';
import tw from 'twin.macro';

import './tailwind.css';
import Card from './Components/Card';
import CardContainer from "./Components/CardContainer";
import Header from './Components/Header';

const StyledContainer = tw.div`font-sans antialiased`;

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
  }, [])

  return (
    <StyledContainer>
      <Header/>
      <CardContainer>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
        </CardContainer>
    </StyledContainer>
  );
}

export default App;
