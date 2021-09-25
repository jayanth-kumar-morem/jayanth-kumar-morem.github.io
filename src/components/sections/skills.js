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
      name:"MERN & Django Development",
      percentage:"95",
      data:"Skills : MERN Stack, SQL, Django, SCSS, Flask, Bootstrap, Semantic UI, Material UI, UI Design, Sockets, AWS, FIrebase, Firestore, Amazon S3, Heroku and eager to learn more.",
    },{
      name:"Deep Learning with Image Processing",
      percentage:"93",
      data:"Proficent in mathematical context of operating of neural networks, optimizers and vadilation techniques as nicely as, can take leverage of python libraries along with Tensorflow and Keras to train and evaluate ANN, CNN, RNN and LTSM models",
    },{
      name:"Natural Language Processing",
      percentage:"95",
      data:"Can carry out textscraping , cleaning , pre-processing and train and examine machine learning models with the first-class performance",
    },{
      name:"Computer Vision",
      percentage:"92",
      data:"Can carry out image and video pre-processing, Object recognition, Object Tracking, Deeplearning and put into effect classfication and realtime object tracking systems using open-cv",
    },{
      name:"Blockchain Development",
      percentage:"92",
      data:"Committed to developing practical blockchain applications based on Solidity, Web3js, Ganache and Truffle Suite",
    },{
      name:"Data Science",
      percentage:"92",
      data:"Can take care of imbalanced, grimy datasets and can carry out feature engineering, feature scaling, Model Training, Hyper Parameter Tuning and Cross Validations. Familiar with Dockers and Kubernetes which assist to set up version at scale",
    }
  ]

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
