import React, { useState } from 'react';
import styled from '@emotion/styled';
import AboutMe from './components/AboutMe';
import Icons from './components/Icons';
import Projects from './components/Projects';

const Container = styled.div`
    background-color: ${props => props.displayBackgroundColor};
    color: ${props => props.displayFontColor};
`;

const TopPage = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Contentwrapper = styled.div`
    width: 80vw;
    margin: auto;
`;

const Mode = styled.div`
    padding: 10px;
    font-size: 1.5em;
    align-items: center;
`;



const App = () => {
    const [lightMode, setLightMode] = useState(false);

    const onButtonClick = () => {
        setLightMode(!lightMode);
    };

    const displayMode = () => {
        return (lightMode === false ? <i className="far fa-sun"></i> : <i className="fas fa-moon"></i>)
    };

    return(
        <Container 
            displayBackgroundColor={lightMode === false ? '#0e1a40' : '#EDEDEF'}
            displayFontColor={lightMode === false? '#E5E7EE': '#3C404F'}
        >
            <TopPage>
                <Mode onClick={onButtonClick}>{displayMode()}</Mode>
            </TopPage>
            <Contentwrapper>
                <AboutMe />
                <Icons lightMode={lightMode} />
                <Projects lightMode={lightMode} />
            </Contentwrapper>
        </Container>
    );
};

export default App;