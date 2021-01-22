import React from 'react';
import 'twin.macro';

const Card = (props) => (
    <div tw="w-80 my-2 border bg-white rounded-lg overflow-hidden">
        <img tw="w-full" alt='...' src="https://via.placeholder.com/150"/>

        <div tw="p-4">
            <p>Title</p>
            <p>Author</p>
            <p>Caption </p>
        </div>
    </div>
);

export default Card;