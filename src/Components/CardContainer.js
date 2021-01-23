import tw from 'twin.macro';

const StyledContainer = tw.div`flex flex-row items-center`;

const CardContainer = (props) => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
);

export default CardContainer;