import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
`;

const Title = styled.div`
    padding-top: 130px;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: row;
    line-height: 0.1;
    font-weight: 700; 
    letter-spacing: -0.5rem;
    font-size: 7rem;
`;

const FirstNameWrap = styled.span`
    padding-top: 100px; 
    &:nth-child(1) {
        color: #FE86C1;
    }
    &:nth-child(2) {
        color: #FEB78D;
    }
    &:nth-child(3) {
        color: #97C8D6;
    }
    &:nth-child(4) {
        color: #D6BBFF;
    }
    &:nth-child(5) {
        color: #F56E4A;
    }30F2C6
`;

const LastNameWrap = styled.span`
    &:nth-child(1) {
        color: #0181BB;
    }
    &:nth-child(2) {
        color: #FFDF6F;
    }
    &:nth-child(3) {
        color: #F56E4A;
    }
`;

const Content = styled.p`
    padding-top: 120px;
    font-size: 1.2em;
    font-family: 'Lato', sans-serif;
    line-height: 1.7;
`;

const ContactTag = styled.a`
    text-decoration: none !important;
    background-color: transparent;
    color: #0181BB;
    font-size: 1.2em;
`;

const AboutMe = () => {
    return (
        <Container>
            <Title>
                <FirstNameWrap>Y</FirstNameWrap>
                <FirstNameWrap>O</FirstNameWrap>
                <FirstNameWrap>O</FirstNameWrap>
                <FirstNameWrap>M</FirstNameWrap>
                <FirstNameWrap>I</FirstNameWrap>
            </Title>
            <Title>
                <LastNameWrap>K</LastNameWrap>
                <LastNameWrap>I</LastNameWrap>
                <LastNameWrap>M</LastNameWrap>
            </Title>
            <Content>
                <div>Hi, I'm a San Francisco based front-end software developer.</div>
                <div>I really like writing code and building things in Javascript.</div>
                <br />
                <div>Let's chat!</div>
                <ContactTag href="mailto:yoomi.kim.dev@gmail.com">yoomi.kim.dev@gmail.com</ContactTag>
            </Content>
        </Container>
    );
};

export default AboutMe;