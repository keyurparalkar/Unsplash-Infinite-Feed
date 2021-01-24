import { useEffect } from 'react';
import tw from 'twin.macro';

import './tailwind.css';
import Card from './Components/Card';
import CardContainer from "./Components/CardContainer";
import Header from './Components/Header';
import { getRandomPhotos } from "./services/api.services";

const StyledContainer = tw.div`font-sans antialiased`;

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
    console.log(process.env.REACT_APP_CLIENT_ID)
    const getData = async () => {
      const data = await getRandomPhotos();
      console.log(data);
    }

    getData();
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
