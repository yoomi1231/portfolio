import React from 'react';
import styled from '@emotion/styled';

const ProjectCards = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
`;

const ImageContainer= styled.a`
    position: relative;
    grid-column: 1 / 8;
    grid-area: 1 / 6 / -1 / -1;
    @media (max-width: 800px) {
        display: grid;
        grid-column: 1 / -1;
        z-index: 1;
        opacity: 0.2;
    }
    &:hover {
        z-index: 100;  
    }
`;

const ContentContainer= styled.div`
    position: relative;
    grid-column: 7 / -1;
    text-align: left;
    font-size: 1em;
    grid-area: 1 / 1/ -1 / 7;
    @media (max-width: 800px) {
        display: grid;
        grid-column: 1 / -1;
        z-index: 2;
        padding: 10px;
    }
`;

const ProjectImg = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
`;

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    height: 250px;
`;

const ProjName = styled.span`
    font-size: 1.6em;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${props => props.colorDisplay};
`;

const ProjDescription = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #222f5b;
    background-color: #222f5b;
    font-size: 1em;
    padding: 30px;
    color: #E5E7EE;
    @media (max-width: 800px) {
        padding: 0;
        padding: 50px;
    }
`;

const ProjInfo = styled.a`
    display: flex;
    justify-content: left;
    color: ${props => props.colorDisplay};
    text-decoration: none;
`;

const ProjectLink = styled.div`
    padding-right: 50px;
    
`;

const LineBreak = styled.hr`
    border-top: 1px solid #FEB78D; 
`;

const ProjectCard = (props) => {
    const { lightMode, title, description, index, githubLink, webLink, imgSrc, techStack} = props;

    return (
        <div>
            <ProjectCards>
                <ImageContainer href={webLink}>
                    <ProjectImg src={imgSrc} alt={title} />
                </ImageContainer>

                <ContentContainer>
                    <ProjectContent>
                        <ProjName colorDisplay={lightMode === false ? 'white' : '#3b5998'}>{title}</ProjName>
                        <ProjDescription>{description}</ProjDescription>
                        <ProjInfo
                            href={githubLink}
                            colorDisplay={lightMode === false ? 'white' : '#3b5998'} 
                        >   
                            <ProjectLink><i class="fab fa-github"></i></ProjectLink>
                            <ProjectLink>{techStack}</ProjectLink>
                        </ProjInfo>
                    </ProjectContent>
                </ContentContainer>
            </ProjectCards>
            <LineBreak />
        </div>
    );
};

export default ProjectCard;