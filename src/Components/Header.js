import React from 'react';
import tw from 'twin.macro';

//Styled Component:
const StyledHeading = tw.header`lg:px-4 px-2 flex flex-wrap items-center py-0 bg-white`;

const Header = () => (
    <StyledHeading>
        <div tw="flex-col">
            <p tw="font-black text-2xl">Unsplash</p>
        </div>
    </StyledHeading>
);

export default Header;

