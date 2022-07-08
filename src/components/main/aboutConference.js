
import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight} from 'react-icons/ai';
const Main = () => {
  return (
    <>
        <Root >
          <MainPage>
    <FirstContainer>
      <span className="font-bold text-red-500 uppercase tex-3xl">about Conference</span>
                <Heading >
                  <span>Maharaja Agrasen University</span>
                </Heading>
                <Para>
                    <p>
                    Maharaja Agrasen University established in the year 2013, was inaugurated by Shri Pranab Mukerjee, 
                    Hon’ble President of India. It aspires to become the University of first choice for potential students, teaching and 
                    research community and recognized for providing excellent opportunities for global success. MAU wishes to be acknowledged as a value-based campus where students, faculty and staff are creatively and actively engaged in scholarly activities of relevance to the community at large. Mission of MAU is to contribute to the society through imparting vibrant, innovative learning and research at the highest international levels opportunities for global success. 
                    Maharaja Agrasen University established in the year 2013, was inaugurated by Shri Pranab Mukerjee, 
                    Hon’ble President of India. It aspires to become the University of first choice for potential students, teaching and 
                    research community and recognized for providing excellent opportunities for global success. MAU wishes to be acknowledged as a value-based campus where students, faculty and staff are creatively and actively engaged in scholarly activities of relevance to the community at large. Mission of MAU is to contribute to the society through imparting vibrant, innovative learning and research at the highest international levels opportunities for global success. 
                    </p>
                
                </Para>
                  </FirstContainer>
                  <ImageContainer>
              <img src="/images/vector.png" className="bg-cover object-center"/>
        </ImageContainer>
          </MainPage>
        </Root>
   
    </>
  );
};

export default Main;

const Root = styled.div`
/* height:70vh ; */
padding:5rem 0;
`;
const Para = styled.p`
color: black;
font-size: 1.1rem;
margin-top: 1rem;
`
const Heading = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3rem;
  color: black;
font-weight: 900;
line-height: 3rem;
`;
const MainPage = styled.div`
  display: flex;
  /* padding:0 10rem; */
/* justify-content:space-evenly; */
justify-content:space-between;
`;
const FirstContainer = styled.div`
width:60% ;
`
const ImageContainer = styled.div`
  /* background:url("");     */
  background-repeat:no-repeat ;
  background-size:cover;
  background-color:green ;
  /* /* width: 460px; */
  /* height: 400px;  */
  min-width:60vmin ;
box-shadow: 40px;
border-radius: 1rem;
`;
const ViewButton = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 900;
  width: 24%; 
  margin-top: 1rem;
  font-weight:800;
  padding:0.5rem 0.5rem;
`