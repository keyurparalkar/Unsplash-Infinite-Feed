import tw from 'twin.macro';
import React, { useEffect, useState } from 'react';

import Card from './Card';
import { getRandomPhotos } from "../services/api.services";

const StyledContainer = tw.div`flex flex-wrap gap-x-1 mx-2 lg:py-32 md:py-32 sm:py-32 py-28 overflow-hidden justify-center sm:-mx-1 md:-mx-1 lg:-mx-2 xl:-mx-1`;

const CardContainer = (props) => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {     
  
      const getData = async () => {
        const data = await getRandomPhotos();
        setPhotoData(data.data);
      }
  
      getData();
    }, [])


    const listPhotoData = photoData ? photoData.map(({ id, urls ,downloads, likes, alt_description, user}) => {
        return <Card
                imgUrl = {urls.regular}
                downloads = {downloads}
                likes = {likes}
                alt_description = {alt_description}
                name = {user.name}
        />
    }) : '';

    return(
        <StyledContainer>
                {listPhotoData}
        </StyledContainer>
    )
};

export default CardContainer;