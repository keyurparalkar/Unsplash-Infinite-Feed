import React from 'react';
import tw from 'twin.macro';
import TagButton from "./TagButton";
import DownloadIcon from "./Icons/download.icon";

const StyledCard = tw.div`lg:w-1/5 md:w-full sm:w-full my-2 bg-white rounded-lg overflow-hidden border shadow`;

const tags = ["man", "drinking", "coffee"].map((val)=> <TagButton>{val}</TagButton>);

const Card = (props) => (
    <StyledCard>
        <img tw="w-full" alt='...' src="https://images.unsplash.com/photo-1609357781814-8e90574789e2?ixid=MXwyNDgxNHwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1" />

        <div tw="p-6">
            <div id="downloads_likes" tw="text-gray-600 text-xs pb-2 font-semibold tracking-wide"><DownloadIcon/>1345 &bull; 24</div>
            <div id="description"><h4 tw="font-semibold my-0 pb-1 text-lg">A man drinking a coffee.</h4></div>
            <div id="author" tw="my-0 text-gray-600 hover:underline">
                Joe Example
                </div>
            <div id="tags" tw="mt-4">{tags}</div>
        </div>
    </StyledCard>
);

export default Card;