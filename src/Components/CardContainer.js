import React, { useState, useRef, useCallback } from 'react';
import tw from 'twin.macro';
import usePhotos from "../Callbacks/usePhotos.callback";
import Card from './Card';
import { Spinner } from "./Loaders/Spinner.loader";


const StyledContainer = tw.div`flex flex-wrap gap-x-1 mx-2 lg:py-32 md:py-32 sm:py-32 py-28 overflow-hidden justify-center sm:-mx-1 md:-mx-1 lg:-mx-2 xl:-mx-1`;

const CardContainer = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  let { Loading, error, photoData } = usePhotos(pageNumber);
  
  console.log({ Loading, error, photoData })
  const observer = useRef();
  const lastPhotoRef = useCallback(node => {
    if(Loading) return;
    if(observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })

    if(node) observer.current.observe(node);
  }, [Loading])

  const listPhotoData = photoData ? photoData.map(({ urls, downloads, likes, alt_description, user }, index) => {
    if (photoData.length === index + 1) {
      return <Card
        ref={lastPhotoRef}
        imgUrl={urls.regular}
        downloads={downloads}
        likes={likes}
        alt_description={alt_description}
        name={user.name}
        key={alt_description}
      />
    } else {
      return <Card
        imgUrl={urls.regular}
        downloads={downloads}
        likes={likes}
        alt_description={alt_description}
        name={user.name}
        key={alt_description}
      />
    }

  }) : '';

  return (
    <StyledContainer>
      {Loading && <Spinner />}
      {error && <h1 tw="py-32">Oops Something went wrong. Please refresh the page</h1>}
      {listPhotoData}
    </StyledContainer>
  )
};

export default CardContainer;