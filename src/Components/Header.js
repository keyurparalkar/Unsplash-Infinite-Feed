import React from 'react';
import tw from 'twin.macro';

//Styled Component:
const StyledHeading = tw.h1`text-black text-4xl font-sans font-black subpixel-antialiased`;

const Header = () => (
    <>
        <StyledHeading>Unsplash <p tw="leading-3 text-gray-400 text-sm">&bull; Photos for everyone</p></StyledHeading>
    </>
);

export default Header;

