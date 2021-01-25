import React from 'react';
import styled,{keyframes} from 'styled-components';

const pulseKeyFrame = keyframes`
    0%, 100% { 
        opacity: 1; 
    }
    50% { 
        opacity: 0.5;
     }
`;


const PulseSpan = styled.span`
    animation: 2s ${pulseKeyFrame} cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const ImageLoader = () => <PulseSpan>
    <div tw="bg-blue-600 w-full h-full">Loading Image ...</div>
    </PulseSpan>