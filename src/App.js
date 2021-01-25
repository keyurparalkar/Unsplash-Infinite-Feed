import tw from 'twin.macro';
import React, { Suspense, useEffect} from 'react';

import './tailwind.css';
import Header from './Components/Header';
import { Spinner } from "./Components/Loaders/Spinner.loader";
const CardContainer = React.lazy(() => import("./Components/CardContainer"));

const StyledContainer = tw.div`flex font-sans antialiased`;

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
  }, [])  

  return (
    <StyledContainer>
      <Header/>
      <Suspense fallback={<Spinner/>}>
          <CardContainer/>
      </Suspense>
    </StyledContainer>
  );
}

export default App;
