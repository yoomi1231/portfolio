import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    height: 70px;
`;

const ItemContainer = styled.div`
    display: flex;
    padding-top: 10px;
    width: 20vw;
    justify-content: flex-start;
    color: ${props => props.colorDisplay};
`;

const InfoItem = styled.a` 
    font-size: 1em;
    color: ${props => props.colorDisplay};
    padding-right: 50px
`;

const Icons = (props) => {
    const { lightMode } = props;

    return (
        <Container>
            <ItemContainer>
                <InfoItem 
                    colorDisplay={lightMode === false ? 'white' : 'black'} 
                    href='https://github.com/yoomi1231'
                >
                    <i className="fab fa-github"></i>
                </InfoItem>
                <InfoItem 
                    colorDisplay={lightMode === false ? 'white' : 'black'} 
                    href='https://www.linkedin.com/in/yoomi-kim-739a397b/'
                >
                    <i className="fab fa-linkedin"></i>
                </InfoItem>
                <InfoItem 
                    colorDisplay={lightMode === false ? 'white' : 'black'} 
                    href='https://www.instagram.com/yoomikim_/'
                >
                    <i className="fab fa-instagram"></i>
                </InfoItem>
            </ItemContainer>
        </Container>
    );
};

export default Icons;