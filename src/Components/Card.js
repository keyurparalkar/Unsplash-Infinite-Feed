import React from 'react';
import tw from 'twin.macro';

import DownloadIcon from "./Icons/download.icon";
import LikeIcon from "./Icons/like.icon";

const StyledCard = tw.div`lg:w-1/5 md:w-full sm:w-full my-2 bg-white rounded-lg overflow-hidden border shadow`;
const CardDom = (props) => (
        <>
            <img tw="w-full" alt='...' src={props.data.imgUrl} />
            <div tw="p-6">
                <div id="downloads_likes" tw="flex flex-row text-gray-600 text-sm pb-2 font-semibold">
                    <div tw="flex flex-row">
                        <DownloadIcon />&nbsp;{props.data.downloads}
                    </div> &nbsp; &bull; &nbsp;
                    <div tw="flex flex-row">
                        <LikeIcon />&nbsp;{props.data.likes}
                    </div>
                </div>
                <div id="description"><h4 tw="font-semibold my-0 pb-1 text-lg">{props.data.alt_description}</h4></div>
                <div id="author" tw="my-0 text-gray-600 hover:underline">
                    {props.data.name}
                </div>
            </div>
        </>
);
const Card = React.forwardRef((props, ref) => {
    if(ref){
        return (<StyledCard ref={ref}>
            <CardDom data={props}/>
        </StyledCard>)
    } else {
       return ( <StyledCard>
            <CardDom data={props}/>
        </StyledCard>)
    }
    
});

export default Card;