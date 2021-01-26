import tw from 'twin.macro';
import React, { useEffect } from 'react';

import './tailwind.css';
import Header from './Components/Header';
import CardContainer from "./Components/CardContainer";

const StyledContainer = tw.div`flex font-sans antialiased`;

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
  }, [])

  return (
    <StyledContainer>
      <Header />
      <CardContainer />
    </StyledContainer>
  );
}

export default App;
