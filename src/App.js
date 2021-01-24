import { useEffect, useState } from 'react';
import tw from 'twin.macro';

import './tailwind.css';
import Card from './Components/Card';
import CardContainer from "./Components/CardContainer";
import Header from './Components/Header';
import { getRandomPhotos } from "./services/api.services";

const StyledContainer = tw.div`font-sans antialiased`;

function App() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
    

    const getData = async () => {
      const data = await getRandomPhotos();
      setPhotoData(data.data);
    }

    getData();
  }, [])

  const listPhotoData = photoData ? photoData.map(({ urls ,downloads, likes, alt_description, user}) => {
    return <Card
            imgUrl = {urls.regular}
            downloads = {downloads}
            likes = {likes}
            alt_description = {alt_description}
            name = {user.name}
      />
  }) : '';
  
  return (
    <StyledContainer>
      <Header/>
      <CardContainer>
              {listPhotoData}
        </CardContainer>
    </StyledContainer>
  );
}

export default App;
