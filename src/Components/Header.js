import React from 'react';
import tw from 'twin.macro';

//Styled Component:
const StyledHeading = tw.header`fixed w-full lg:px-4 px-0 flex flex-wrap items-center py-2 z-50 shadow-md bg-white`;

const Header = () => (
    <StyledHeading>
        <div tw="flex-col px-2">
            <p tw="font-black text-2xl">Unsplash</p>
        </div>
    </StyledHeading>
);

export default Header;

