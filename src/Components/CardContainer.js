import tw from 'twin.macro';

const StyledContainer = tw.div`flex flex-col justify-between items-center bg-red-200`;

const CardContainer = (props) => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
);

export default CardContainer;