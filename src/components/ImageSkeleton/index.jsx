import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.4;
    }
    100%{
        opacity: 0.8;
    }
`;

export const LoadingSkeleton = styled.div`
    background-color: '#757373';
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;