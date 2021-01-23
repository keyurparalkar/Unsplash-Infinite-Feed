import tw from 'twin.macro';
import styled from "styled-components";

// const StyledButton = tw.button`border-none`;
const StyledButton = styled.button`
    background: #eee;
    border:0px;
    border-radius: 3px 3px 0 3px;
    color: black;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;

    &::before{
        background:#fff;
        border-radius:10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content:'';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }

    &::after{
        background: #fff;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #eee;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }
`;

const TagButton = (props) => (
    <StyledButton>{props.children}</StyledButton>
);

export default TagButton;