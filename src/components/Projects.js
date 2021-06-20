import React from 'react';
import styled from '@emotion/styled';
import ProjectCard from './ProjectCard';
import CryptoPriceProject from '../cryptoprice.png';
import BreweryFinder from '../beer.png';
import PillBox from '../mediapp.png';

const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
`;

const TitleContainer = styled.div`
`;

const Title = styled.span`
    font-size: 1.8em;
    color: #FE86C1;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`;

const LineBreak = styled.hr`
    border-top: 1px solid #FEB78D; 
`;

const Projects = () => {
    const myProjects = [
        {
            title: "Cryptocurrency Price",
            description: "Recreation of Coinbase's prices tab. It enables you to view current top 60 cryptocurrencies' prices and track price changes.",
            githubLink: "https://github.com/yoomi1231/Crypto-price",
            webLink: "https://crypto-price-cyan.vercel.app/",
            imgSrc: `${CryptoPriceProject}`,
            techStack: "HTML, css, javascript, React"
        },
        {
            title: "Craft Brewery Finder",
            description: "ababakskfjdlkaf dkfjls bakskfjdlkaf dkfjls kskfjdlkaf dkfjls dkfjlasdf dkflsjdf dkfdls sdklfj",
            githubLink: "https://github.com/yoomi1231/brewery-finder",
            webLink: "https://brewery-finder-ig3sapou0-yoomikimdev-gmailcom.vercel.app/",
            imgSrc: `${BreweryFinder}`,
            techStack: "HTML, css, javascript, React, Google API"
        },
        {
            title: 'Medication Tracker',
            description: "bakskfjdlkaf dkfjls  bakskfjdlkaf dkfjls bakskfjdlkaf dkfjls bakskfjdlkaf dkfjls  bakskfjdlkaf dkfjls  bakskfjdlkaf dkfjls.",
            githubLink: "https://github.com/yoomi1231/brewery-finder",
            webLink: "https://med-tracker-client.herokuapp.com/",
            imgSrc: `${PillBox}`,
            techStack: "HTML, css, javascript, React, Redux"
        },
    ];

    return (
        <Container>
            <TitleContainer>
                <Title>Featured Works</Title>
                <LineBreak />
            </TitleContainer>
            {
                myProjects.map((item, index) => 
                    <ProjectCard
                        key={`${item.title}-${index}`}
                        title={item.title}
                        description={item.description}
                        index={index}
                        githubLink={item.githubLink}
                        webLink={item.webLink}
                        imgSrc={item.imgSrc}
                        techStack={item.techStack}
                    />  
                )
            }
        </Container>
    );
};

export default Projects;


