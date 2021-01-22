import tw from 'twin.macro';

const StyledContainer = tw.div`mx-auto flex flex-col justify-between items-center px-6 bg-red-200`;

const CardContainer = (props) => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
);

export default CardContainer;