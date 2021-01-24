import tw from 'twin.macro';

const StyledContainer = tw.div`flex flex-wrap gap-x-1 mx-2 overflow-hidden justify-center sm:-mx-1 md:-mx-1 lg:-mx-2 xl:-mx-1`;

const CardContainer = (props) => (
    <StyledContainer>
            {props.children}
    </StyledContainer>
);

export default CardContainer;