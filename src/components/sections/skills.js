import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';
import { theme, mixins, media, Section, Heading } from '@styles';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  align-items:baseline;
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
const StyledSkill=styled.div`
  display:flex;
  flex-direction:column;
  align-items: baseline;
  justify-content: space-between;
`;
const StyledSkillName=styled.a`
  margin-right:30px;
  font-size:27px;
  color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
`;
const StyledData=styled.p`
  font-size:20px;
  margin-top:0.5rem!important;
  // margin-left:2.3rem!important;
  margin-bottom:1.6rem!important;
  // margin:30px;
`;
const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  flex-direction: column;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 100%;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const Skills = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  const skills = [
    {
      name: "Web Development",
      percentage: "95",
      data: "Proficient in creating dynamic web applications using technologies like MERN Stack, Spring Boot, Thymeleaf, Django, Flask, and more. Skilled in UI design and experienced with SCSS, Bootstrap, Semantic UI, Material UI, and implementing real-time functionality with Sockets. Well-versed in deploying on AWS, Firebase, Heroku, and managing data with SQL.",
    },
    {
      name: "Deep Learning with Image Processing",
      percentage: "93",
      data: "Adept in the mathematical foundations of neural networks, including optimizers and validation techniques. Experienced in implementing neural network architectures such as ANN, CNN, RNN, and LSTM using Python libraries like TensorFlow and Keras. Proficient in training and evaluating models for image analysis tasks.",
    },
    {
      name: "Natural Language Processing",
      percentage: "95",
      data: "Skilled in text scraping, cleaning, and preprocessing. Proficient in training and evaluating machine learning models for various natural language processing tasks. Well-versed in utilizing Python libraries to achieve state-of-the-art performance.",
    },
    {
      name: "Computer Vision",
      percentage: "92",
      data: "Experienced in image and video preprocessing, object recognition, and object tracking. Proficient in utilizing OpenCV for implementing classification and real-time object tracking systems. Capable of working on complex computer vision projects.",
    },
    {
      name: "Blockchain Development",
      percentage: "92",
      data: "Dedicated to creating practical blockchain applications using technologies like Solidity, Web3js, Ganache, and the Truffle Suite. Enthusiastic about leveraging blockchain for secure and decentralized solutions.",
    },
    {
      name: "Data Science",
      percentage: "92",
      data: "Skilled in handling imbalanced and dirty datasets. Proficient in feature engineering, feature scaling, model training, hyperparameter tuning, and cross-validation. Familiar with Docker and Kubernetes for scalable deployment of models.",
    },
  ];


  return (
    <StyledContainer id="skills" ref={revealContainer}>
      <Heading>Skills</Heading>
      <StyledFlexContainer>
      {skills.map((item,index)=>{
        return(
          <StyledContent>
            <StyledSkillName>{index+1}{".  " }{item.name}</StyledSkillName>
            <StyledData>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.data}</StyledData>
          </StyledContent>
        )
      })}


      </StyledFlexContainer>
    </StyledContainer>
  );
};

export default Skills;
