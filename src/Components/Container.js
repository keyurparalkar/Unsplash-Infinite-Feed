import styled from "styled-components";
import tw from 'twin.macro';

// const StyledContainer = styled.div.attrs({
//     className:'container mx-auto'
// })``;

const StyledContainer = tw.div`border`;

const Container = (props) => (
    <StyledContainer>   
        {props.children}
    </StyledContainer>
);

export default Container;